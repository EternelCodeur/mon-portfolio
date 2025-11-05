export const config = { runtime: 'edge' };

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
  }

  const apiKey = process.env.REDACTED;
  if (!apiKey) {
    return new Response('Missing REDACTED', { status: 500, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const messages = Array.isArray(body?.messages) ? body.messages : [];

    const encoder = new TextEncoder();
    const stream = new ReadableStream<Uint8Array>({
      start: async (controller) => {
        const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            stream: true,
            messages: messages
          })
        });

        if (!openaiRes.ok || !openaiRes.body) {
          controller.error(new Error('Upstream error'));
          return;
        }

        const reader = openaiRes.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data:')) continue;
            const data = trimmed.replace(/^data:\s*/, '');
            if (data === '[DONE]') {
              controller.close();
              return;
            }
            try {
              const json = JSON.parse(data);
              const token = json?.choices?.[0]?.delta?.content || '';
              if (token) controller.enqueue(encoder.encode(token));
            } catch (_) { void 0; }
          }
        }

        if (buffer) {
          try {
            const json = JSON.parse(buffer.replace(/^data:\s*/, ''));
            const token = json?.choices?.[0]?.delta?.content || '';
            if (token) controller.enqueue(encoder.encode(token));
          } catch (_) { void 0; }
        }

        controller.close();
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        ...corsHeaders,
      }
    });
  } catch (err) {
    return new Response('Bad Request', { status: 400, headers: corsHeaders });
  }
}

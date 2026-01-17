import React, { useEffect, useRef } from 'react';

const WhiteGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 40;
      const lineWidth = 1;
      
      // Dessiner les lignes de la grille en gris clair
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.3)';
      ctx.lineWidth = lineWidth;
      
      // Lignes verticales
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Lignes horizontales
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Ajouter des carrés gris aux intersections avec animation subtile
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const pulseIntensity = Math.sin(time * 0.001 + x * 0.005 + y * 0.005) * 0.3 + 0.7;
          const randomOpacity = Math.random() > 0.95 ? 0.8 : 0.4;
          const finalOpacity = pulseIntensity * 0.6 + randomOpacity * 0.2;
          
          // Carré principal
          const squareSize = 4;
          ctx.fillStyle = `rgba(107, 114, 128, ${finalOpacity})`;
          ctx.fillRect(x - squareSize/2, y - squareSize/2, squareSize, squareSize);
          
          // Effet de lueur subtile pour les carrés plus visibles
          if (finalOpacity > 0.6) {
            const glowSize = 8;
            ctx.fillStyle = `rgba(156, 163, 175, ${finalOpacity * 0.2})`;
            ctx.fillRect(x - glowSize/2, y - glowSize/2, glowSize, glowSize);
          }
        }
      }
      
      time += 16;
      animationId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)' }}
    />
  );
};

export default WhiteGrid;

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
      
      const gridSize = 30;
      const lineWidth = 0.5;
      
      // Dessiner les lignes de la grille
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
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
      
      // Ajouter des points clignotants aux intersections
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const flickerIntensity = Math.sin(time * 0.002 + x * 0.01 + y * 0.01) * 0.5 + 0.5;
          const randomFlicker = Math.random() > 0.98 ? 1 : 0;
          const intensity = flickerIntensity * 0.8 + randomFlicker * 0.2;
          
          if (intensity > 0.3) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${intensity})`;
            ctx.fill();
            
            // Ajouter un effet de lueur
            if (intensity > 0.7) {
              ctx.beginPath();
              ctx.arc(x, y, 4, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${intensity * 0.1})`;
              ctx.fill();
            }
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
      style={{ background: 'black' }}
    />
  );
};

export default WhiteGrid;

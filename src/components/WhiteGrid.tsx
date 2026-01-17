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
      
      // Grid size responsive based on screen size
      const baseGridSize = 50;
      const gridSize = Math.max(baseGridSize, Math.min(80, window.innerWidth / 20));
      const lineWidth = 1;
      
      // Dessiner les lignes de la grille en blanc
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
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
      
      // Carrés uniformes avec taille responsive (maintenus pour cohérence)
      const squareSize = Math.max(6, Math.min(10, gridSize / 8));
      
      // Points blancs clignotants comme des étoiles aux intersections
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          // Effet de clignotement d'étoile
          const twinkleIntensity = Math.sin(time * 0.003 + x * 0.01 + y * 0.01) * 0.5 + 0.5;
          const randomTwinkle = Math.random() > 0.98 ? 1 : 0;
          const finalIntensity = twinkleIntensity * 0.8 + randomTwinkle * 0.2;
          
          // Point/étoile principal
          if (finalIntensity > 0.3) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${finalIntensity})`;
            ctx.fill();
            
            // Effet de lueur d'étoile
            if (finalIntensity > 0.7) {
              ctx.beginPath();
              ctx.arc(x, y, 4, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${finalIntensity * 0.1})`;
              ctx.fill();
            }
          }
          
          // Carré uniforme (plus subtil pour ne pas perturber les étoiles)
          if (finalIntensity > 0.4) {
            ctx.fillStyle = `rgba(255, 255, 255, ${finalIntensity * 0.3})`;
            ctx.fillRect(x - squareSize/2, y - squareSize/2, squareSize, squareSize);
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

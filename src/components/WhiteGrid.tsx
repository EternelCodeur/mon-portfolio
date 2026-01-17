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
    let lastFrameTime = 0;
    const targetFPS = 30; // Réduit à 30 FPS pour plus de stabilité
    const frameInterval = 1000 / targetFPS;

    const drawGrid = (currentTime: number) => {
      // Limitation du FPS pour stabilité
      if (currentTime - lastFrameTime < frameInterval) {
        animationId = requestAnimationFrame(drawGrid);
        return;
      }
      
      lastFrameTime = currentTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Grid size responsive based on screen size
      const baseGridSize = 50;
      const gridSize = Math.max(baseGridSize, Math.min(80, window.innerWidth / 20));
      const lineWidth = 1;
      
      // Dessiner les lignes de la grille en blanc (plus stable)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
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
      
      // Carrés uniformes avec taille responsive (plus stables)
      const squareSize = Math.max(3, Math.min(6, gridSize / 12));
      
      // Points blancs clignotants comme des étoiles aux intersections (optimisé)
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          // Effet de clignotement plus doux et stable
          const twinkleIntensity = Math.sin(time * 0.0008 + x * 0.003 + y * 0.003) * 0.25 + 0.75;
          const finalIntensity = twinkleIntensity * 0.5;
          
          // Point/étoile principal (réduit pour stabilité)
          if (finalIntensity > 0.45) {
            ctx.beginPath();
            ctx.arc(x, y, 0.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${finalIntensity * 0.7})`;
            ctx.fill();
            
            // Effet de lueur d'étoile (plus subtil)
            if (finalIntensity > 0.85) {
              ctx.beginPath();
              ctx.arc(x, y, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${finalIntensity * 0.03})`;
              ctx.fill();
            }
          }
          
          // Carré uniforme (plus subtil pour stabilité)
          if (finalIntensity > 0.6) {
            ctx.fillStyle = `rgba(255, 255, 255, ${finalIntensity * 0.1})`;
            ctx.fillRect(x - squareSize/2, y - squareSize/2, squareSize, squareSize);
          }
        }
      }
      
      time += 40; // Fréquence encore plus réduite pour stabilité
      animationId = requestAnimationFrame(drawGrid);
    };

    drawGrid(0);

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

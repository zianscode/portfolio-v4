import React, { useEffect, useRef } from 'react';
import styles from '@/styles/ParticleStars.module.css';

const ParticleStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Fungsi untuk membuat bintang
    const createStars = () => {
      for (let i = 0; i < 100; i++) {
        const angle = Math.random() * Math.PI * 2; // Random angle in radians
        const speed = Math.random() * 0.5 + 0.1;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          speedX: Math.cos(angle) * speed, // X component of velocity
          speedY: Math.sin(angle) * speed, // Y component of velocity
          opacity: Math.random() * 0.5 + 0.3, // Improved opacity range
        });
      }
    };

    // Fungsi untuk menggambar bintang
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Move stars in their respective directions
        star.x += star.speedX;
        star.y += star.speedY;

        // Reset position when star goes off screen
        if (star.x < -10) star.x = canvas.width + 10;
        if (star.x > canvas.width + 10) star.x = -10;
        if (star.y < -10) star.y = canvas.height + 10;
        if (star.y > canvas.height + 10) star.y = -10;
      });
    };

    createStars();

    let animationFrameId: number;
    const animate = () => {
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      stars.length = 0;
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default ParticleStars;
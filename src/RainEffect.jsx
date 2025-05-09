import { useEffect } from "react";

function useRainEffect() {
  useEffect(() => {
    const canvas = document.getElementById("lluviaCanvas");
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const drops = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 10 + 5,
      speed: Math.random() * 4 + 2,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "#4CC9F0";
      ctx.lineWidth = 1.5;

      drops.forEach((drop) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - 4, drop.y + drop.length);
        ctx.stroke();

        drop.x -= 0.5;
        drop.y += drop.speed;

        if (drop.y > height || drop.x < 0) {
          drop.x = Math.random() * width;
          drop.y = -20;
        }
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);
}

export default useRainEffect;

"use client";

import { useEffect, useRef } from "react";

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(ratio, ratio);
    };

    resize();
    window.addEventListener("resize", resize);

    const STAR_COUNT = 80;

    const stars = Array.from({ length: STAR_COUNT }).map(() => ({
      baseX: Math.random() * window.innerWidth,
      baseY: Math.random() * window.innerHeight,

      size: Math.random() * 2.1 + 0.4,

      offsetX: Math.random() * Math.PI * 2,
      offsetY: Math.random() * Math.PI * 2,
      speedX: Math.random() * 0.002 + 0.0005,
      speedY: Math.random() * 0.002 + 0.0005,
      ampX: Math.random() * 24 + 4,
      ampY: Math.random() * 16 + 4,

      minOpacity: Math.random() * 0, 
      maxOpacity: Math.random() * 0.7 + 0.4, 

      fadePhase: Math.random() * Math.PI * 2,
      fadeSpeed: Math.random() * 0.0008 + 0.0004, 
    }));

    let frameId: number;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        const x = s.baseX + Math.sin(t * s.speedX + s.offsetX) * s.ampX;
        const y = s.baseY + Math.cos(t * s.speedY + s.offsetY) * s.ampY;

        const fade =
          s.minOpacity +
          (s.maxOpacity - s.minOpacity) *
            (0.5 + 0.5 * Math.sin(t * s.fadeSpeed + s.fadePhase));

        ctx.globalAlpha = fade;

        ctx.shadowBlur = s.size * 4;
        ctx.shadowColor = "#4C67FF";

        ctx.fillStyle = "#4C67FF";
        ctx.beginPath();
        ctx.arc(x, y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      frameId = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

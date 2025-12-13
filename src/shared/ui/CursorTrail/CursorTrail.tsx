"use client";

import { useEffect, useRef } from "react";

/* ================= utils ================= */

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpColor(
  c1: { r: number; g: number; b: number },
  c2: { r: number; g: number; b: number },
  t: number
) {
  return {
    r: Math.round(lerp(c1.r, c2.r, t)),
    g: Math.round(lerp(c1.g, c2.g, t)),
    b: Math.round(lerp(c1.b, c2.b, t)),
  };
}

/* ================= colors ================= */
const HEAD_COLOR = { r: 180, g: 160, b: 210 }; 
const TAIL_COLOR = { r: 122, g: 106, b: 250 };

/* ================= component ================= */

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const SCREEN = useRef({ w: 0, h: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const prevMouse = useRef({ x: 0, y: 0 });
  const mouseSpeed = useRef(0);

  const QUANTITY = 7;
  const TAIL_LENGTH = 55;
  const RADIUS = 14;

  const particles = useRef<any[]>([]);

  /* ================= setup ================= */

  function resize() {
    const canvas = canvasRef.current!;
    SCREEN.current.w = window.innerWidth;
    SCREEN.current.h = window.innerHeight;
    canvas.width = SCREEN.current.w;
    canvas.height = SCREEN.current.h;
  }

  function createParticles() {
    particles.current = [];
    const s = 4 + Math.random();

    for (let i = 0; i < QUANTITY; i++) {
      particles.current.push({
        size: s,
        position: { x: mouse.current.x, y: mouse.current.y },
        shift: { x: mouse.current.x, y: mouse.current.y },
        speed: 0.08 + Math.random() * 0.06,
        orbit: RADIUS * 0.5,
        lastPositions: Array.from({ length: TAIL_LENGTH }, () => ({
          x: mouse.current.x,
          y: mouse.current.y,
        })),
      });
    }
  }

  /* ================= loop ================= */

  function loop() {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    mouseSpeed.current *= 0.64;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((p, i) => {
      p.lastPositions.unshift({ x: p.position.x, y: p.position.y });
      if (p.lastPositions.length > TAIL_LENGTH) p.lastPositions.pop();

      p.shift.x += (mouse.current.x - p.shift.x) * p.speed;
      p.shift.y += (mouse.current.y - p.shift.y) * p.speed;

      p.position.x = p.shift.x + Math.cos(i) * p.orbit;
      p.position.y = p.shift.y + Math.sin(i) * p.orbit;

      /* === хвост === */
      for (let j = 0; j < p.lastPositions.length - 1; j++) {
        

        const a = p.lastPositions[j];
        const b = p.lastPositions[j + 1];
        const t = j / (p.lastPositions.length - 1); // 0 → 1

        const color = lerpColor(HEAD_COLOR, TAIL_COLOR, t);
        const alpha = (1 - t) * 0.9;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        ctx.lineWidth = Math.max(0.6, p.size * (1 - t));
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        ctx.save();

      }
    });

    requestAnimationFrame(loop);
  }

  /* ================= events ================= */

  useEffect(() => {
    resize();
    mouse.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    createParticles();

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - prevMouse.current.x;
      const dy = e.clientY - prevMouse.current.y;

      mouseSpeed.current = Math.sqrt(dx * dx + dy * dy);
      prevMouse.current = { x: e.clientX, y: e.clientY };
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ================= render ================= */

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{ width: "100vw", height: "100vh", zIndex: 1 }}
    />
  );
}

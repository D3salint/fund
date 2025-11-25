"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const SCREEN = useRef({ w: 0, h: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const mouseIsDown = useRef(false);

  const RADIUS = 10;
  const RADIUS_SCALE = useRef(1);
  const R_MIN = 1;
  const R_MAX = 1.5;

  const QUANTITY = 6;
  const TAIL_LENGTH = 85;

  const particles = useRef<any[]>([]);

  function createParticles() {
    particles.current = [];

    for (let i = 0; i < QUANTITY; i++) {
      particles.current.push({
        size: 1,
        position: { x: mouse.current.x, y: mouse.current.y },
        offset: { x: 0, y: 0 },
        shift: { x: mouse.current.x, y: mouse.current.y },
        speed: 0.06 + Math.random() * 0.04,
        targetSize: 1,
        fillColor: '#' + (Math.random() * 0x404040 + 0xaaaaaa | 0).toString(16),
        orbit: RADIUS * 0.5 + RADIUS * 0.5 * Math.random(),
        lastPositions: Array(TAIL_LENGTH).fill({ x: mouse.current.x, y: mouse.current.y }),
      });
    }
  }

  function resize() {
    const canvas = canvasRef.current!;
    SCREEN.current.w = window.innerWidth;
    SCREEN.current.h = window.innerHeight;
    canvas.width = SCREEN.current.w;
    canvas.height = SCREEN.current.h;
  }

  function loop() {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );
    gradient.addColorStop(0, "rgb(112, 105, 208)");
    gradient.addColorStop(1, "rgb(149, 135, 227)");

    if (mouseIsDown.current) {
      RADIUS_SCALE.current += (R_MAX - RADIUS_SCALE.current) * 0.02;
    } else {
      RADIUS_SCALE.current -= (RADIUS_SCALE.current - R_MIN) * 0.02;
    }

    if (RADIUS_SCALE.current > R_MAX) RADIUS_SCALE.current = R_MAX;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((p, i) => {
      p.lastPositions.unshift({ x: p.position.x, y: p.position.y });
      if (p.lastPositions.length > TAIL_LENGTH) p.lastPositions.pop();

      p.shift.x += (mouse.current.x - p.shift.x) * p.speed;
      p.shift.y += (mouse.current.y - p.shift.y) * p.speed;

      p.position.x = p.shift.x + Math.cos(i + p.offset.x) * (p.orbit * RADIUS_SCALE.current);
      p.position.y = p.shift.y + Math.sin(i + p.offset.y) * (p.orbit * RADIUS_SCALE.current);

      p.position.x = Math.max(0, Math.min(SCREEN.current.w, p.position.x));
      p.position.y = Math.max(0, Math.min(SCREEN.current.h, p.position.y));

      p.size += (p.targetSize - p.size) * 0.05;
      if (Math.round(p.size) === Math.round(p.targetSize)) {
        p.targetSize = 1 + Math.random() * 7;
      }

      for (let j = 0; j < p.lastPositions.length - 1; j++) {
        const a = p.lastPositions[j];
        const b = p.lastPositions[j + 1];
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = p.size * (1 - j / p.lastPositions.length);
        ctx.globalAlpha = 1 - j / p.lastPositions.length;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(149, 135, 227, 0.6)";
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      const tip = p.lastPositions[0];
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 25;
      ctx.shadowColor = "rgba(149, 135, 227, 0.7)";
      ctx.arc(tip.x, tip.y, p.size / 2, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(loop);
  }

  useEffect(() => {
    resize();
    mouse.current = { x: SCREEN.current.w / 2, y: SCREEN.current.h / 2 };
    createParticles();

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", () => (mouseIsDown.current = true));
    window.addEventListener("mouseup", () => (mouseIsDown.current = false));
    window.addEventListener("resize", resize);

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="world"
      className="fixed top-0 left-0 pointer-events-none"
      style={{ width: "100vw", height: "100vh", zIndex: -1 }}
    />
  );
}

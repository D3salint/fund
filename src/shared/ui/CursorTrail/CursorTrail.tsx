"use client";

import { useEffect, useRef } from "react";

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

const startColor = { r: 190, g: 157, b: 243 };
const midColor = { r: 149, g: 135, b: 227 };
const endColor = { r: 114, g: 107, b: 209 };
const tipColor = lerpColor(startColor, midColor, 0.15);
const tipShadow = `rgba(${tipColor.r}, ${tipColor.g}, ${tipColor.b}, 0.9)`;
// const tailShadow = "rgba(114, 107, 209, 0.8)";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const SCREEN = useRef({ w: 0, h: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const mouseIsDown = useRef(false);
  const prevMouse = useRef({ x: 0, y: 0 });
  const mouseSpeed = useRef(0);

  const RADIUS = 14;
  const RADIUS_SCALE = useRef(1);

  const QUANTITY = 7;
  const TAIL_LENGTH = 55;

  const particles = useRef<any[]>([]);

  const enableGlow = false;

  function createParticles() {
    particles.current = [];
    const s = 3.6 + Math.random() * 1;

    for (let i = 0; i < QUANTITY; i++) {
      particles.current.push({
        size: s,
        position: { x: mouse.current.x, y: mouse.current.y },
        offset: { x: 0, y: 0 },
        shift: { x: mouse.current.x, y: mouse.current.y },
        speed: 0.1 + Math.random() * 0.08,
        targetSize: s,
        fillColor: "#ffffff",
        orbit: RADIUS * 0.5,
        lastPositions: Array(TAIL_LENGTH).fill({
          x: mouse.current.x,
          y: mouse.current.y,
        }),
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

    mouseSpeed.current *= 0.95;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const fade = Math.min(mouseSpeed.current / 2, 1);

    particles.current.forEach((p, i) => {
      p.lastPositions.unshift({ x: p.position.x, y: p.position.y });
      if (p.lastPositions.length > TAIL_LENGTH) p.lastPositions.pop();

      p.shift.x += (mouse.current.x - p.shift.x) * p.speed;
      p.shift.y += (mouse.current.y - p.shift.y) * p.speed;

      p.position.x =
        p.shift.x + Math.cos(i + p.offset.x) * (p.orbit * RADIUS_SCALE.current);
      p.position.y =
        p.shift.y + Math.sin(i + p.offset.y) * (p.orbit * RADIUS_SCALE.current);

      p.position.x = Math.max(0, Math.min(SCREEN.current.w, p.position.x));
      p.position.y = Math.max(0, Math.min(SCREEN.current.h, p.position.y));

      for (let j = 0; j < p.lastPositions.length - 1; j++) {
        const a = p.lastPositions[j];
        const b = p.lastPositions[j + 1];
        const t = j / (p.lastPositions.length - 1);

        const color =
          t < 0.5
            ? lerpColor(startColor, midColor, t / 0.5)
            : lerpColor(midColor, endColor, (t - 0.5) / 0.5);

        const alpha = (1 - t) * 0.9;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        ctx.shadowBlur = enableGlow ? 28 : 0;
        // ctx.shadowColor = tailShadow;
        ctx.lineWidth = Math.max(0.6, p.size * (1 - t));
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // --- dots
      if (fade > 0.01) {
        const tip = p.lastPositions[0];
        ctx.save();
        ctx.beginPath();
        ctx.globalAlpha = fade;
        ctx.shadowBlur = enableGlow ? 48 : 0;
        ctx.shadowColor = enableGlow ? tipShadow : "transparent";
        ctx.fillStyle = `rgba(${tipColor.r}, ${tipColor.g}, ${tipColor.b}, 1)`;
        ctx.arc(tip.x, tip.y, Math.max(0.8, p.size * 0.5), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // --- блок свечения сверху
      if (enableGlow && glowRef.current) {
        glowRef.current.style.setProperty("--x", `${mouse.current.x}px`);
        glowRef.current.style.setProperty("--y", `${mouse.current.y}px`);
      }
    });

    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;

    requestAnimationFrame(loop);
  }

  useEffect(() => {
    resize();
    mouse.current = { x: SCREEN.current.w / 2, y: SCREEN.current.h / 2 };
    createParticles();

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - prevMouse.current.x;
      const dy = e.clientY - prevMouse.current.y;

      mouseSpeed.current = Math.sqrt(dx * dx + dy * dy);

      prevMouse.current.x = e.clientX;
      prevMouse.current.y = e.clientY;

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
    <>
      <canvas
        ref={canvasRef}
        id="world"
        className="fixed top-0 left-0 pointer-events-none"
        style={{ width: "100vw", height: "100vh", zIndex: 1 }}
      />

      {enableGlow && (
        <div
          ref={glowRef}
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 50,
            background: `radial-gradient(
              circle 100px at var(--x, 50%) var(--y, 50%),
              rgba(255,255,255,0.4) 0%,
              rgba(255,255,255,0.2) 40%,
              rgba(255,255,255,0) 100%
            )`,
            mixBlendMode: "screen",
            opacity: 1,
            filter: "blur(40px)",
            transition: "background 0.1s ease",
          }}
        />
      )}
    </>
  );
}

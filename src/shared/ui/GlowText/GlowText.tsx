import React, { useMemo, useState, useEffect, useRef } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  children: string;
  layers?: number;
  color?: string;
  maxAlpha?: number;
  maxDistance?: number;
  scaleStep?: number;
  fadeDuration?: number; // длительность появления слоя в секундах
}

export const GlowText: React.FC<Props> = ({
  className,
  children,
  layers = 20,
  color = "255,255,255",
  maxAlpha = 0.04,
  maxDistance = 20,
  scaleStep = 0.45,
  fadeDuration = 2.5, // по умолчанию полсекунды
}) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const clones = useMemo(() => {
    if (!containerRef.current) return [];

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouse.x - centerX;
    const dy = mouse.y - centerY;
    const length = Math.sqrt(dx * dx + dy * dy) || 1;
    const dirX = dx / length;
    const dirY = dy / length;

    const arr = [];
    for (let i = 1; i <= layers; i++) {
      const progress = i / layers;
      const distance = maxDistance * progress;
      const scale = 1 + progress * scaleStep;
      const offsetX = dirX * distance;
      const offsetY = dirY * distance;
      const alpha = maxAlpha * (1 - progress);
      const blur = 2 + progress * 2;

      arr.push(
        <span
          key={i}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
            color: `rgba(${color}, ${alpha})`,
            filter: `blur(${blur}px)`,
            pointerEvents: "none",
            mixBlendMode: "screen",
            fontSize: "inherit",
            fontFamily: "inherit",
            fontWeight: "inherit",
            lineHeight: "inherit",
            whiteSpace: "pre",
            opacity: 0,
            willChange: 'transform',
            animation: `fadeIn ${fadeDuration}s ease forwards`,
            animationDelay: `${i * 0.02}s`, // небольшая задержка для каждого слоя
          }}
        >
          {children}
        </span>
      );
    }

    return arr;
  }, [children, layers, color, maxAlpha, maxDistance, scaleStep, mouse, fadeDuration]);

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      <div ref={containerRef} className={clsx("relative inline-block select-none", className)}>
        <h1 className="relative mt-5 text-[10.625rem] text-center font-tthoves font-semibold -tracking-4 leading-none max-xxxl:text-[7.5rem] max-lg:text-[6.25rem] max-md:text-[5rem] max-sm:text-[15.45vw] text-white">
          {clones}
          {children}
        </h1>
      </div>
    </>
  );
};

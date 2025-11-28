import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";

interface SpotlightWrapperProps {
  className?: string;
  children?: React.ReactNode;
  radius?: number;
  damping?: number;
}

const SpotlightWrapper: React.FC<SpotlightWrapperProps> = ({
  className,
  children,
  radius = 100,
  damping = 0.45,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const fadeRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const setX = useRef<((v: number) => void) | null>(null);
  const setY = useRef<((v: number) => void) | null>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    const sx = gsap.quickSetter(el, "--x", "px") as (v: number) => void;
    const sy = gsap.quickSetter(el, "--y", "px") as (v: number) => void;

    setX.current = sx;
    setY.current = sy;

    sx(pos.current.x);
    sy(pos.current.y);

    if (fadeRef.current) fadeRef.current.style.opacity = "0";
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease: "power3.out",
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = wrapperRef.current?.getBoundingClientRect();
    if (!r) return;

    moveTo(e.clientX - r.left, e.clientY - r.top);

    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 1, duration: 0.15, overwrite: true });
    }
  };

  const handleLeave = () => {
    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 0, duration: 0.4, overwrite: true });
    }
  };

  return (
    <div
      ref={wrapperRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{
        position: "absolute",
        inset: 0,
        ["--x" as any]: "50%",
        ["--y" as any]: "50%",
        ["--r" as any]: `${radius}px`,
        pointerEvents: "auto", 
        zIndex:10
      }}
      className={clsx(className)}
    >
      {children}

      <div
        ref={fadeRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 50,
          background: `radial-gradient(
            circle var(--r) at var(--x) var(--y),
            rgba(255,255,255,0.4) 0%,
            rgba(255,255,255,0.2) 40%,
            rgba(255,255,255,0) 100%
          )`,
          mixBlendMode: "screen",
          opacity: 0,
          transition: "opacity 0.25s ease",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
};

export default SpotlightWrapper;

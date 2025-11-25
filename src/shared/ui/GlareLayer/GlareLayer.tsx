"use client";
import { useEffect, useRef } from "react";

interface GlareLayerProps {
  speed?: number;      
  maxOffset?: number; 
}

export function GlareLayer({ speed = 0.5, maxOffset = 30 }: GlareLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let offset = 0;
    let direction = 1;

    const animate = () => {
      if (layerRef.current) {
        offset += direction * speed;
        if (offset > maxOffset || offset < -maxOffset) {
          direction *= -1;
        }
        layerRef.current.style.transform = `translateX(${offset}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, [speed, maxOffset]);

  return (
    <div
      ref={layerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <img
        src="/images/glare.png"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
        alt="glare"
      />
    </div>
  );
}

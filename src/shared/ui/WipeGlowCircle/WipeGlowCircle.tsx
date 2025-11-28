import React from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  width?: number;
  height?: number;
  circleSize?: number; 
}

export const WipeGlowCircle: React.FC<Props> = ({
  className,
  width = 800,
  height = 130,
  circleSize = 700,
}) => {
  const shimmerInset = 40;
  const shimmerAnimation = `wipe 4s linear infinite`;

  return (
    <div
      className={clsx(className, "relative overflow-hidden")}
      style={{
        width,
        height,
        padding: 40,
      }}
    >
      <div
        style={{
          width: circleSize,
          height: circleSize,
          borderRadius: "50%",
          position: "absolute",
          top: 30,
          left: `calc(50% - ${circleSize / 2}px)`,
          isolation: "isolate",
          boxShadow: "0 2px 3px 1px hsl(222, 50%, 20% / 50%)",
        }}
      >
        {/* Shimmer */}
        <div
          style={{
            position: "absolute",
            inset: -shimmerInset,
            borderRadius: "50%",
            pointerEvents: "none",
            maskImage:
              "linear-gradient(90deg, transparent 20%, black 88%, transparent 90%)",
            maskSize: "200% 200%",
            maskPosition: "center",
            animation: shimmerAnimation,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: shimmerInset,
              borderRadius: "50%",
              boxShadow:
                "0 0 3px 2px hsl(213, 20%, 95%), 0 0 7px 4px hsl(213, 20%, 80%), 0 0 13px 8px hsl(248, 40%, 60%), 0 0 22px 6px hsl(248, 20%, 40%)",
              zIndex: -1,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: shimmerInset,
              borderRadius: "50%",
              boxShadow:
                "inset 0 0 0 1px hsl(248, 70%, 95%), inset 0 0 3px 1px hsl(248, 100%, 80%), inset 0 0 9px 1px hsl(248, 100%, 70%)",
              zIndex: 2,
            }}
          />
        </div>
      </div>

      <style>
        {`
          @keyframes wipe {
            0% { mask-position: 200% center; }
            100% { mask-position: 0% center; }
          }
        `}
      </style>
    </div>
  );
};

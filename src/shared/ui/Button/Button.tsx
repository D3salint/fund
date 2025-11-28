"use client";

import React from "react";

import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
  color?: string;
}

export const Button: React.FC<Props> = ({
  className,
  children,
  color = "rgba(255, 255, 255, 0.6)",
}) => {
  const gradient = `conic-gradient(rgba(0,0,0,0), ${color}, rgba(0,0,0,0) 25%)`;

  return (
    <div className="relative" style={{ padding: "1px", cursor: "pointer" }}>
      <div
        className="absolute inset-0 overflow-hidden rounded-[100px] blur-[6px]"
        style={{
          zIndex: 0,
        }}
      >
        <div
          style={{
            content: "''",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "99999px",
            height: "99999px",
            transform: "translate(-50%, -50%) rotate(0deg)",
            backgroundImage: gradient,
            backgroundRepeat: "no-repeat",
            animation: "rotate 6s linear infinite",
          }}
        />
      </div>

      <div
        className="absolute inset-0 overflow-hidden rounded-[100px]"
        style={{
          zIndex: 1,
        }}
      >
        <div
          style={{
            content: "''",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "99999px",
            height: "99999px",
            transform: "translate(-50%, -50%) rotate(0deg)",
            backgroundImage: gradient,
            backgroundRepeat: "no-repeat",
            animation: "rotate 6s linear infinite",
            zIndex: -2,
          }}
        />

        <div
          style={{
            content: "''",
            position: "absolute",
            left: "5px",
            top: "5px",
            width: "calc(100% - 10px)",
            height: "calc(100% - 10px)",
            background: "#1e202dcc",
            borderRadius: "100px",
            zIndex: -1,
          }}
        />
      </div>

      <div className={clsx("relative z-2", className)}>{children}</div>

      <style>{`
        @keyframes rotate {
          100% {
            transform: translate(-50%, -50%) rotate(1turn);
          }
        }
      `}</style>
    </div>
  );
};

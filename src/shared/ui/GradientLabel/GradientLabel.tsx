"use client";

import React from "react";

import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export const GradientLabel: React.FC<Props> = ({
  className,
  children,
  color = "#3E4BD1",
}) => {
  const gradient = `conic-gradient(rgba(0,0,0,0), ${color}, rgba(0,0,0,0) 25%)`;
  return (
    <div className="relative inline-block " style={{ padding: "1px" }}>
      {/* Glow layer */}
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
            animation: "rotate 4s linear infinite",
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
            animation: "rotate 4s linear infinite",
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

      {/* Content */}
      <div
        className={clsx(
          className,
          "font-medium text-[0.8125rem] leading-4 tracking-normal text-center rounded-[100px]",
          "relative z-10 flex gap-1",
          "px-2.5 py-1.5 bg-[#171934] bg-[url(/images/icons/tag-label.svg)] bg-cover "
        )}
      >
        {children}
      </div>

      <style>
        {`
          @keyframes rotate {
            100% {
              transform: translate(-50%, -50%) rotate(1turn);
            }
          }
        `}
      </style>
    </div>
  );
};

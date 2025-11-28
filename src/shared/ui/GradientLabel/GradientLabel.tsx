"use client";

import React from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const GradientLabel: React.FC<Props> = ({ className, children }) => {
  return (
    <div className="relative inline-block " style={{padding: "2px" }}>
      {/* Glow layer */}
      <div
        className={clsx(
          "absolute inset-0 overflow-hidden rounded-[100px]"
        )}
        style={{
          filter: "blur(20px)",
        }}
      >
      </div>

      {/* Border box */}
      <div
        className={clsx(
          "absolute inset-0 overflow-hidden rounded-[100px]"
        )}
      >
        <div
          style={{
            position: "absolute",
            content: "''",
            top: "50%",
            left: "50%",
            width: 99999,
            height: 99999,
            transform: "translate(-50%, -50%) rotate(0deg)",
            backgroundImage:
              "conic-gradient(rgba(0,0,0,0), #3E4BD1, rgba(0,0,0,0) 25%)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 0",
            animation: "rotate 4s linear infinite",
            zIndex: -2,
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

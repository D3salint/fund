"use client";

import React from "react";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import css from "./PageWrapper.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Circle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 1615 1615"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="807.5"
      cy="807.5"
      r="806.002"
      fill="url(#paint0_linear_12_3744)"
      fillOpacity="0.02"
    />
    <circle
      cx="807.5"
      cy="807.5"
      r="806.002"
      stroke="#F1F7FD"
      strokeOpacity="0.04"
      strokeWidth="2.99629"
    />
    <circle
      cx="807.5"
      cy="807.5"
      r="806.002"
      stroke="url(#paint1_linear_12_3744)"
      strokeWidth="2.99629"
    />
    <defs>
      <linearGradient
        id="paint0_linear_12_3744"
        x1="1615"
        y1="0"
        x2="-192.874"
        y2="1482.56"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1F7FD" stopOpacity="0.24" />
        <stop offset="1" stopColor="#F1F7FD" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_12_3744"
        x1="70.9507"
        y1="1123.08"
        x2="106.079"
        y2="1024.61"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#90C7FF" stopOpacity="0.21" />
        <stop offset="1" stopColor="#F1F7FD" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

interface SectionProps extends Props {
  id?: string;
  circles?:
    | boolean
    | {
        showOnEnter: boolean;
        hideOnLeave: boolean;
      };
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, circles = false, id }, ref) => {
    const rootRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
      () => {
        if (typeof circles !== "object") return;

        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap
          .timeline({ paused: true })
          .to(".section-circle svg", {
            opacity: 1,
            rotate: 0,
            duration: 1.5,
          })
          .to(".section-circle svg", {
            opacity: 0,
            rotate: (index) => (index % 2 === 0 ? 60 : -45),
            duration: 1.5,
          });

        ScrollTrigger.create({
          trigger: rootRef.current,
          invalidateOnRefresh: true,
          start: "top 50%",
          end: "bottom 60%",
          onEnter: () => timeline.tweenFromTo(0, 1.5),
          onLeave: () => timeline.tweenFromTo(1.5, 3),
          onEnterBack: () => timeline.tweenFromTo(3, 1.5),
          onLeaveBack: () => timeline.tweenFromTo(1.5, 0),
        });
      },
      { scope: rootRef }
    );

    return (
      <section
        className={clsx("min-h-svh flex flex-col relative z-1", className)}
        ref={(node) => {
          if (node) {
            (rootRef as any).current = node;
            if (ref) {
              (ref as any).current = node;
            }
          }
        }}
        id={id}
      >
        {circles && (
          <div
            className={
              "absolute left-0 top-0 size-full -z-1 pointer-events-none hidden"
            }
          >
            <div
              className={clsx(
                "absolute l-0 top-1/2 w-full -translate-1/2 aspect-square",
                typeof circles === "object" &&
                  circles.showOnEnter &&
                  css.initialHide
              )}
            >
              <div
                className={clsx(
                  "absolute left-0 top-0 w-full origin-center scale-[0.75] rotate-[-190deg] max-md:scale-1",
                  "section-circle"
                )}
              >
                <Circle
                  className={clsx(
                    "size-full",
                    typeof circles === "object" &&
                      circles.showOnEnter &&
                      "opacity-0 rotate-60"
                  )}
                />
              </div>
              <div
                className={clsx(
                  "absolute left-0 top-0 w-full origin-center max-md:scale-150",
                  "section-circle"
                )}
              >
                <Circle
                  className={clsx(
                    "size-full",
                    typeof circles === "object" &&
                      circles.showOnEnter &&
                      "opacity-0 -rotate-45"
                  )}
                />
              </div>
            </div>
          </div>
        )}
        {children}
      </section>
    );
  }
);

export const PageWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "flex flex-col min-h-svh bg-[radial-gradient(circle_at_center,#040713,#020308)] bg-size-[100svw_100svh] bg-center bg-no-repeat bg-fixed relative z-1 before:size-full before:block before:bg-[url(/images/background-v2.webp)] before:bg-cover before:bg-center before:bg-fixed before:absolute before:left-0 before:top-0 before:-z-1 before:pointer-events-none",
        className
      )}
    >
      {children}
    </div>
  );
};

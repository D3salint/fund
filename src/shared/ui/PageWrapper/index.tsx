"use client";

import React from "react";

import CursorTrail from "../CursorTrail/CursorTrail";
import { GlareLayer } from "../GlareLayer/GlareLayer";
import StarfieldCanvas from "../StarfieldCanvas/StarfieldCanvas";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useScroller } from "../Scroller";

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
  glare?:
    | boolean
    | {
        showOnEnter: boolean;
        hideOnLeave: boolean;
      };
  light?:
    | boolean
    | {
        showOnEnter: boolean;
        hideOnLeave: boolean;
      };
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { children, className, circles = false, glare = false, light = false, id },
    ref
  ) => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const innerCircleRef = React.useRef<HTMLDivElement>(null);

    const { isReady: isScrollerReady, scrollerRef } = useScroller();

    useGSAP(
      () => {
        gsap.registerPlugin(ScrollTrigger);

        if (typeof circles === "object") {
          const timeline = gsap
            .timeline({ paused: true })
            .to(".section-circle svg", { opacity: 1, scale: 1, duration: 1.5 })
            .to(".section-circle svg", { opacity: 0, scale: 0, duration: 1.5 });

          ScrollTrigger.create({
            trigger: rootRef.current,
            scroller: scrollerRef.current,
            start: "top 50%",
            end: "bottom 60%",
            onEnter: () => timeline.tweenFromTo(0, 1.5),
            onLeave: () => timeline.tweenFromTo(1.5, 3),
            onEnterBack: () => timeline.tweenFromTo(3, 1.5),
            onLeaveBack: () => timeline.tweenFromTo(1.5, 0),
          });
        }

        if (typeof glare === "object") {
          const timelineGlare = gsap.timeline({ paused: true });
          timelineGlare.to(".section-glare", { opacity: 1, duration: 1.2 });
          timelineGlare.to(".section-glare", { opacity: 0, duration: 1.2 });

          ScrollTrigger.create({
            trigger: rootRef.current,
            scroller: scrollerRef.current,
            start: "top 50%",
            end: "bottom 60%",
            onEnter: () =>
              glare.showOnEnter && timelineGlare.tweenFromTo(0, 1.2),
            onLeave: () =>
              glare.hideOnLeave && timelineGlare.tweenFromTo(1.2, 2.4),
            onEnterBack: () =>
              glare.showOnEnter && timelineGlare.tweenFromTo(2.4, 1.2),
            onLeaveBack: () =>
              glare.hideOnLeave && timelineGlare.tweenFromTo(1.2, 0),
          });
        }

        if (typeof light === "object") {
          const timelineLight = gsap.timeline({ paused: true });
          timelineLight.to(".section-light", { opacity: 1, duration: 1.2 });
          timelineLight.to(".section-light", { opacity: 0, duration: 1.2 });

          ScrollTrigger.create({
            trigger: rootRef.current,
            scroller: scrollerRef.current,
            start: "top 50%",
            end: "bottom 60%",
            onEnter: () =>
              light.showOnEnter && timelineLight.tweenFromTo(0, 1.2),
            onLeave: () =>
              light.hideOnLeave && timelineLight.tweenFromTo(1.2, 2.4),
            onEnterBack: () =>
              light.showOnEnter && timelineLight.tweenFromTo(2.4, 1.2),
            onLeaveBack: () =>
              light.hideOnLeave && timelineLight.tweenFromTo(1.2, 0),
          });
        }
      },
      { scope: rootRef, dependencies: [isScrollerReady] }
    );

    useGSAP(
      () => {
        if (!innerCircleRef.current) return;

        gsap.fromTo(
          innerCircleRef.current,
          { scale: 0, opacity: 0 },
          { scale: 0.75, opacity: 1, duration: 1.5, ease: "power2.out" }
        );
      },
      { scope: rootRef }
    );

    useGSAP(
      () => {
        const lightEl = rootRef.current?.querySelector(".hero-light-image");
        if (!lightEl) return;

        gsap.fromTo(
          lightEl,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.3, ease: "power3.out", delay: 1.6 }
        );
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
              "absolute left-0 top-0 size-full -z-1 pointer-events-none overflow-hidden"
            }
          >
            <div
              className={clsx(
                "absolute l-0 top-1/2 w-full -translate-y-1/2 aspect-square"
              )}
            >
              <div
                ref={innerCircleRef}
                className={clsx(
                  "absolute left-0 top-0 w-full origin-center scale-[0.75] rotate-[-190deg] max-md:scale-100",
                  "section-circle"
                )}
              >
                <Circle
                  className={clsx(
                    "size-full animate-spin [animation-duration:6s] [animation-direction:reverse]",
                    typeof circles === "object" &&
                      circles.showOnEnter &&
                      "opacity-0 scale-0"
                  )}
                />
              </div>

              <div
                className={clsx(
                  "absolute left-0 top-0 w-full origin-center max-md:scale-[1.4]",
                  "section-circle"
                )}
              >
                <Circle
                  className={clsx(
                    "size-full animate-spin [animation-duration:6s]",
                    typeof circles === "object" &&
                      circles.showOnEnter &&
                      "opacity-0 scale-0"
                  )}
                />
              </div>
            </div>
          </div>
        )}

        {glare && (
          <div
            className={clsx(
              "section-glare absolute left-0 top-0 w-full h-full -z-1 pointer-events-none",
              typeof glare === "object" && glare.showOnEnter && "opacity-0"
            )}
          >
            <GlareLayer maxOffset={30} speed={0.3} />
          </div>
        )}

        {light && (
          <div
            className={clsx(
              "section-light absolute left-0 bottom-0 -z-1 pointer-events-none w-full",
              typeof light === "object" && light.showOnEnter && "opacity-0"
            )}
          >
            <img
              className="hero-light-image w-125 opacity-0 pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0"
              src="/images/hero-light.webp"
              alt=""
            />
          </div>
        )}
        {children}
      </section>
    );
  }
);

export const PageWrapper: React.FC<Props> = ({ children, className }) => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.timeline().to(`.stars`, { opacity: 1 }, 0.8);
    },
    { scope: rootRef }
  );
  return (
    <div
      ref={rootRef}
      className={clsx(
        "flex flex-col min-h-svh bg-[radial-gradient(circle_at_center,#040713,#020308)] bg-size-[100svw_100svh] bg-center bg-no-repeat bg-fixed relative z-1 before:size-full before:block before:bg-[url(/images/hero-bg.png)] before:bg-cover before:bg-center before:bg-fixed before:absolute before:left-0 before:top-0 before:-z-1 before:pointer-events-none",
        className
      )}
    >
      <CursorTrail />

      <div className="stars opacity-0">
        <StarfieldCanvas />
      </div>

      {children}
    </div>
  );
};

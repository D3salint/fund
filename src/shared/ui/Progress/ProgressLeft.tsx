"use client";

import { useRef } from "react";

import { useScroller } from "@/shared/ui/Scroller";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

type Props = {
  className?: string;
  delay?: number;
};

export default function ProgressLeft({ className, delay }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const drawPaths = useRef<SVGPathElement[]>([]);
  const glowRef = useRef<SVGGElement>(null);
  const { scrollerRef, isReady: isScrollerReady } = useScroller();

  useGSAP(
    () => {
      if (!rootRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 95%",
          scroller: scrollerRef.current,
          invalidateOnRefresh: true,
        },
      });

      if (glowRef.current) {
        gsap.set(glowRef.current, {
          opacity: 0,
          scale: 0.2,
          delay: delay,
          transformOrigin: "center",
        });

        tl.to(
          glowRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.6,
          },
          1.8
        );
      }

      drawPaths.current.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        tl.to(
          path,
          {
            strokeDashoffset: 0,
            duration: 1.8,
            delay: delay,
            ease: "power2.out",
          },
          1.2
        );
      });
    },
    { scope: rootRef, dependencies: [isScrollerReady] }
  );

  return (
    <div ref={rootRef}>
      <svg
        className={className}
        viewBox="0 0 123 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={(el) => {
            if (el) drawPaths.current.push(el);
          }}
          d="M0.37793 55.5797C0.37793 55.5797 15.1079 77.6559 29.8062 83.7285C66.3237 98.8159 105.083 16.1279 105.083 16.1279"
          stroke="url(#paint0_linear_2033_4378)"
          stroke-width="0.908633"
        />

        <path
          ref={(el) => {
            if (el) drawPaths.current.push(el);
          }}
          d="M46.1873 53.4588C62.8287 44.1622 80.9949 32.9474 97.3983 21.2119"
          stroke="url(#paint1_linear_2033_4378)"
          stroke-width="0.908633"
          stroke-linecap="round"
        />

        <g filter="url(#filter0_f_2033_4378)" ref={glowRef}>
          <circle cx="105.184" cy="16.9917" r="3.18022" fill="#9C77FF" />
        </g>

        <g ref={glowRef}>
          <circle cx="104.878" cy="16.5088" r="2.5" fill="#9B76FE" />
        </g>

        <defs>
          <filter
            id="filter0_f_2033_4378"
            x="88.1927"
            y="0.000293732"
            width="33.9828"
            height="33.9828"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="6.90561"
              result="effect1_foregroundBlur_2033_4378"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2033_4378"
            x1="105.427"
            y1="14.1866"
            x2="-7.29636"
            y2="32.0803"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0107155" stop-color="#9C77FF" />
            <stop offset="0.0990329" stop-color="#9C77FF" />
            <stop offset="1" stop-color="#9C77FF" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2033_4378"
            x1="125.756"
            y1="14.428"
            x2="28.7829"
            y2="63.4704"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.172473" stop-color="#9C77FF" />
            <stop offset="0.818318" stop-color="#9C77FF" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

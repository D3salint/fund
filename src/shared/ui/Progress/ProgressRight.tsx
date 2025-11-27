"use client";

import { useRef } from "react";

import { useScroller } from "@/shared/ui/Scroller";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

type Props = {
  className?: string;
};

export default function ProgressRight({ className }: Props) {
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
          transformOrigin: "center",
        });

        tl.to(
          glowRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.6,
          },
          2.6
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
            ease: "power2.out",
          },
          1.4
        );
      });
    },
    { scope: rootRef, dependencies: [isScrollerReady] }
  );

  // useEffect(() => {
  //   const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  //   if (glowRef.current) {
  //     tl.from(
  //       glowRef.current,
  //       {
  //         opacity: 0,
  //         scale: 0.2,
  //         transformOrigin: "center",
  //         duration: 0.8,
  //       },
  //       1.2
  //     );
  //   }

  //   drawPaths.current.forEach((path) => {
  //     const length = path.getTotalLength();

  //     gsap.set(path, {
  //       strokeDasharray: length,
  //       strokeDashoffset: length,
  //     });

  //     tl.to(
  //       path,
  //       {
  //         strokeDashoffset: 0,
  //         duration: 1,
  //       },
  //       0.4
  //     );
  //   });
  // }, []);

  return (
    <div ref={rootRef}>
      <svg
        className={className}
        viewBox="0 0 127 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={(el) => {
            if (el) drawPaths.current.push(el);
          }}
          d="M0.428711 122.368C7.99285 100.734 26.7829 40.458 43.7812 61.8102C65.7715 89.4332 73.4682 132.993 109.595 16.126"
          stroke="url(#paint0_linear_2035_4463)"
          stroke-width="0.908494"
        />

        <path
          ref={(el) => {
            if (el) drawPaths.current.push(el);
          }}
          d="M50.7078 53.4512C67.3467 44.156 85.5101 32.9428 101.911 21.2091"
          stroke="url(#paint1_linear_2035_4463)"
          stroke-width="0.908494"
          stroke-linecap="round"
        />

        <g filter="url(#filter0_f_2035_4463)" ref={glowRef}>
          <circle cx="109.696" cy="16.9893" r="3.17973" fill="#585DE8" />
        </g>

        <g ref={glowRef}>
          <circle cx="109.46" cy="16.5117" r="2.5" fill="#575CE8" />
        </g>

        <defs>
          <filter
            id="filter0_f_2035_4463"
            x="92.7075"
            y="0.000458717"
            width="33.9776"
            height="33.9776"
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
              stdDeviation="6.90456"
              result="effect1_foregroundBlur_2035_4463"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2035_4463"
            x1="109.939"
            y1="14.185"
            x2="-2.76687"
            y2="32.076"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0107155" stop-color="#585DE8" />
            <stop offset="0.0990329" stop-color="#585DE8" />
            <stop offset="1" stop-color="#585DE8" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2035_4463"
            x1="130.264"
            y1="14.4264"
            x2="33.3061"
            y2="63.4612"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.172473" stop-color="#585DE8" />
            <stop offset="0.818318" stop-color="#585DE8" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

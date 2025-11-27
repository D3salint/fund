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

export default function Progress({ className, delay }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const drawPaths = useRef<SVGPathElement[]>([]);
  const { scrollerRef, isReady: isScrollerReady } = useScroller();

  const glowRefs = useRef<SVGGElement[]>([]);

  const registerGlow = (el: SVGGElement | null) => {
    if (el && !glowRefs.current.includes(el)) {
      glowRefs.current.push(el);
    }
  };

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

      glowRefs.current.forEach((g, index) => {
        gsap.set(g, {
          opacity: 0,
          scale: 0.2,
          delay: delay,
          transformOrigin: "center",
        });

        tl.to(
          g,
          {
            opacity: 1,
            scale: 1,
            duration: 1.6,
          },
          1.8 + index * 0.05
        );
      });

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
    <div ref={rootRef} className={className}>
      <svg viewBox="0 0 422 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={(el) => {
            if (el) drawPaths.current.push(el);
          }}
          d="M0.183065 118.806C-0.0215342 118.962 -0.0608007 119.254 0.0953607 119.459C0.251522 119.663 0.543976 119.703 0.748576 119.546L0.46582 119.176L0.183065 118.806ZM166.193 57.3966L166.044 57.8384L166.193 57.3966ZM0.46582 119.176L0.748576 119.546C15.2251 108.497 40.3706 87.6403 70.0196 72.255C99.6741 56.8669 133.734 47.0072 166.044 57.8384L166.193 57.3966L166.341 56.9547C133.671 46.0031 99.3251 55.998 69.5903 71.4277C39.8501 86.8603 14.6226 107.785 0.183065 118.806L0.46582 119.176ZM166.193 57.3966L166.044 57.8384C187.061 64.8837 204.596 72.9204 221.384 79.2052C238.142 85.4789 254.08 89.9723 271.727 89.8362C307.03 89.5638 349.021 70.7689 418.089 11.1438L417.785 10.791L417.48 10.4382C348.443 70.0367 306.671 88.6345 271.72 88.9041C254.24 89.039 238.428 84.5906 221.711 78.3323C205.023 72.0851 187.356 63.9995 166.341 56.9547L166.193 57.3966Z"
          stroke="url(#paint0_linear_2057_4434)"
          stroke-width="0.908633"
          stroke-linecap="round"
        />

        <g ref={registerGlow}>
          <circle
            cx="417.261"
            cy="11.1952"
            r="2.79622"
            // transform="rotate(-28.6946 417.261 11.1952)"
            fill="#585DE8"
          />
        </g>

        <g
          ref={registerGlow}
          filter="url(#filter0_d_2057_4434)"
          //   data-figma-bg-blur-radius="7.82943"
        >
          <circle
            cx="137.217"
            cy="52.5754"
            r="6.99056"
            // transform="rotate(-28.6946 137.217 52.5754)"
            fill="#5864E8"
            fill-opacity="0.19"
            shape-rendering="crispEdges"
          />
        </g>

        <g ref={registerGlow}>
          <circle
            cx="137.116"
            cy="52.7733"
            r="2.79622"
            // transform="rotate(-28.6946 137.116 52.7733)"
            fill="#585DE8"
          />
        </g>

        <g
          ref={registerGlow}
          filter="url(#filter1_d_2057_4434)"
          //   data-figma-bg-blur-radius="7.82943"
        >
          <circle
            cx="296.103"
            cy="85.7805"
            r="6.99056"
            // transform="rotate(-28.6946 296.103 85.7805)"
            fill="#5864E8"
            fill-opacity="0.19"
            shape-rendering="crispEdges"
          />
        </g>

        <g ref={registerGlow}>
          <circle
            cx="296.001"
            cy="85.9784"
            r="2.79622"
            // transform="rotate(-28.6946 296.001 85.9784)"
            fill="#585DE8"
          />
        </g>

        <path
          ref={(el) => {
            if (el) drawPaths.current.push(el);
          }}
          d="M353.052 44.6952C370.122 35.1587 388.757 23.6546 405.584 11.6163"
          stroke="url(#paint1_linear_2057_4434)"
          stroke-width="0.932075"
          stroke-linecap="round"
        />

        <defs>
          <filter
            id="filter0_d_2057_4434"
            x="122.396"
            y="37.7546"
            width="29.6423"
            height="29.6423"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.932075" dy="0.932075" />
            <feGaussianBlur stdDeviation="3.12245" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2057_4434"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2057_4434"
              result="shape"
            />
          </filter>
          <clipPath
            id="bgblur_0_2057_4434_clip_path"
            transform="translate(-122.396 -37.7546)"
          >
            <circle
              cx="137.217"
              cy="52.5754"
              r="6.99056"
              transform="rotate(-28.6946 137.217 52.5754)"
            />
          </clipPath>
          <filter
            id="filter1_d_2057_4434"
            x="281.282"
            y="70.9596"
            width="29.6423"
            height="29.6423"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.932075" dy="0.932075" />
            <feGaussianBlur stdDeviation="3.12245" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2057_4434"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2057_4434"
              result="shape"
            />
          </filter>
          <clipPath
            id="bgblur_1_2057_4434_clip_path"
            transform="translate(-281.282 -70.9596)"
          >
            <circle
              cx="296.103"
              cy="85.7805"
              r="6.99056"
              transform="rotate(-28.6946 296.103 85.7805)"
            />
          </clipPath>
          <linearGradient
            id="paint0_linear_2057_4434"
            x1="419.101"
            y1="8.8109"
            x2="92.8341"
            y2="202.885"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0107155" stop-color="#585DE8" />
            <stop offset="0.0990329" stop-color="#585DE8" />
            <stop offset="1" stop-color="#585DE8" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2057_4434"
            x1="434.673"
            y1="4.65746"
            x2="335.198"
            y2="54.9651"
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

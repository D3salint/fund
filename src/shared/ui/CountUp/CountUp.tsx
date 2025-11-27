"use client";

import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useScroller } from "../Scroller";

type Props = {
  value: number;
  className?: string;
  suffix?: string;
  delay?: number;
  ease?: string;
};

export function useCountUpAnimation(
  ucfg:
    | { value: number; delay?: number; ease?: string; suffix?: string }
    | false
) {
  const rootRef = React.useRef<HTMLSpanElement>(null);
  const { scrollerRef, isReady: isScrollerReady } = useScroller();

  useGSAP(
    () => {
      if (!rootRef.current || ucfg === false) return;

      gsap.registerPlugin(ScrollTrigger);

      const obj = { val: 0 };
      const target = rootRef.current;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: target,
            start: "top 80%",
            scroller: scrollerRef.current,
            invalidateOnRefresh: true,
          },
        })
        .to(obj, {
          val: ucfg.value,
          duration: 1.2,
          ease: ucfg.ease ?? "power1.out",
          delay: ucfg.delay ?? 0,
          onUpdate: () => {
            if (target) {
              const formatted = Math.floor(obj.val).toLocaleString("en-US");
              target.textContent = formatted + (ucfg.suffix ?? "");
            }
          },
        });
    },
    { scope: rootRef, dependencies: [isScrollerReady] }
  );

  return { rootRef };
}

export default function CountUp({
  value,
  className,
  suffix,
  delay,
  ease,
}: Props) {
  const { rootRef } = useCountUpAnimation({ value, delay, ease, suffix });

  return (
    <span ref={rootRef} className={className}>
      0{suffix}
    </span>
  );
}

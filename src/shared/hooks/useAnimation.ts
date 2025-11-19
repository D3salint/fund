import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export type TextAnimationConfig = {
  tag?: "root" | (string & {});
  delay?: number;
  duration?: number;
};

export function useTextAnimation(ucfg: TextAnimationConfig | false) {
  const rootRef = React.useRef<any>(null);

  useGSAP(
    () => {
      if (!rootRef.current || ucfg === false) return;

      gsap.registerPlugin(ScrollTrigger);

      const config = {
        delay: ucfg.delay ?? 0,
        duration: ucfg.duration ?? 0.8,
        tag: ucfg.tag === "root" ? rootRef.current : ucfg.tag || "span",
      };

      gsap
        .timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
            invalidateOnRefresh: true,
          },
        })
        .to(config.tag, {
          duration: config.duration || 0.8,
          stagger: 0.05,
          opacity: 1,
          y: 0,
          filter: `blur(0px)`,
        }, config.delay);
    },
    { scope: rootRef }
  );

  return {
    rootRef,
  };
}

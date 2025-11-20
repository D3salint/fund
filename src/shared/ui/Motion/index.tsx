import React from "react";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

type Props = {
  duration?: number;
  delay?: number;
  stagger?: number;
  initialState?: string;
  as?: "div" | "ul" | "li" | "p";
  animationElement?: "root" | (string & {});
} & React.HTMLAttributes<HTMLElement>;

export const Motion: React.FC<Props> = ({
  delay,
  stagger = 0.05,
  duration,
  initialState = "translate-y-8 opacity-0 blur-md",
  animationElement = "root",
  as: Tag = "div",
  ...props
}) => {
  const rootRef = React.useRef<any>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
            invalidateOnRefresh: true,
          },
        })
        .to(
          animationElement === "root" ? rootRef.current : animationElement,
          {
            duration: duration ?? 0.8,
            stagger,
            opacity: 1,
            y: 0,
            filter: `blur(0px)`,
          },
          delay
        );
    },
    { scope: rootRef }
  );

  return (
    <Tag
      {...props}
      ref={rootRef}
      className={clsx(
        initialState,
        props.className
      )}
    />
  );
};

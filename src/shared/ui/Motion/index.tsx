import React from "react";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

type Props = {
  duration?: number;
  delay?: number;
  initialState?: string;
  as?: "div" | "ul" | "li" | "p";
} & React.HTMLAttributes<HTMLElement>;

export const Motion: React.FC<Props> = ({
  delay,
  duration,
  initialState = "translate-y-8 opacity-0 blur-md",
  as: Tag = "div",
  ...props
}) => {
  const rootRef = React.useRef<any>(null);

  useGSAP(() => {
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
      .to(rootRef.current, {
        duration: duration ?? 0.8,
        stagger: 0.05,
        opacity: 1,
        y: 0,
        filter: `blur(0px)`,
      }, delay);
  }, { scope: rootRef });

  return (
    <Tag
      {...props}
      ref={rootRef}
      className={clsx(initialState, props.className)}
    />
  );
};

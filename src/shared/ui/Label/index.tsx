import React from "react";

import { useTextAnimation } from "@/shared/hooks/useAnimation";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
  animation?:
    | {
        delay?: number;
        duration?: number;
      }
    | false;
}

export const Label: React.FC<Props> = ({ children, className, animation }) => {
  const { rootRef } = useTextAnimation(
    animation ? { ...animation, tag: "root" } : false
  );

  return (
    <p
      className={clsx(
        "py-2.5 px-5 rounded-4xl bg-[linear-gradient(74deg,rgba(255,255,255,0.024),rgba(255,255,255,0.08))] blur-3xl font-inter text-xs leading-tight font-semibold text-white before:absolute before:inset-0 before:p-[0.1rem] before:rounded-inherit before:compositemask before:bg-[linear-gradient(120deg,#fff0_-3rem,#ffffff57_80%)] before:pointer-events-none",
        className,
        animation &&
          "[&_span]:opacity-0 [&_span]:blur-md"
      )}
      ref={rootRef}
    >
      {children}
    </p>
  );
};

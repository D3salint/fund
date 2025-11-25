import React from "react";

import { useTextAnimation } from "@/shared/hooks/useAnimation";
import clsx from "clsx";

interface Props {
  className?: string;
  children: string;
  color?: string;
  animation?:
    | {
        delay?: number;
        duration?: number;
      }
    | false;
}

export const GlowText: React.FC<Props> = ({
  className,
  children,
  color = "u-text-gradient-[linear-gradient(to_bottom,#fcfeff,#aea9b8)]",
  animation = false,
}) => {
  const { rootRef } = useTextAnimation(animation || false);

  return (
    <div className={clsx(className, color)} ref={rootRef}>
      <h1 className="mt-5 text-[10.625rem] text-center font-tthoves font-semibold -tracking-4 leading-none max-xxxl:text-[7.5rem] max-lg:text-[6.25rem] max-md:text-[5rem] max-sm:text-[15.45vw]">
        {children}
      </h1>
    </div>
  );
};

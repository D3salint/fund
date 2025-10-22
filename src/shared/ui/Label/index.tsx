import React from "react";

import { useTextAnimation } from "@/shared/hooks/useAnimation";
import clsx from "clsx";

import css from "./Label.module.scss";

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
      className={clsx(css.label, className, animation && css.initalState)}
      ref={rootRef}
    >
      {children}
    </p>
  );
};

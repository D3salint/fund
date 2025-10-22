import React from "react";
import clsx from "clsx";
import css from "./Label.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Label: React.FC<Props> = ({ children, className}) => {
  return (
    <p className={clsx(css.label, className)}>
      {children}
    </p>
  );
};
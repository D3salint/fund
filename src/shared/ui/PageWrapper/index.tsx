import React from "react";
import clsx from "clsx";
import css from "./PageWrapper.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<Props> = ({
  children,
  className
}) => {
  return (
    <div className={clsx(css.wrapper, className)}>
      {children}
    </div>
  );
};
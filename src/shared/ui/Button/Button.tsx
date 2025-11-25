import React from "react";

import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <a
      className={clsx(
        "pl-8 pr-5 h-11 rounded-[3.75rem] flex items-center gap-3 text-sm -tracking-1 text-white",
        "backdrop-blur-2xl relative cursor-pointer",
        "bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]",
        className
      )}
    >
      {children}
    </a>
  );
};

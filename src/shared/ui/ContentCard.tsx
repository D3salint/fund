import type React from "react";

import clsx from "clsx";

type Props = {
  borderGradient?: string;
  bgGradient?: string;
  as?: keyof React.JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLDivElement>;

export function ContentCard({
  className,
  as: Tag = "div",
  borderGradient = "after:u-border-gradient-[linear-gradient(170deg,rgba(255,255,255,0.1),rgba(153,153,153,0))]",
  bgGradient = "before:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003),rgba(255,255,255,0.01))]",
  ...props
}: Props) {
  return (
    <Tag
      {...props as any}
      className={clsx(
        `${borderGradient}`,
        `relative z-1 before:absolute ${bgGradient} before:rounded-[inherit] before:inset-0 before:-z-1 before:pointer-events-none`,
        className
      )}
    />
  );
}

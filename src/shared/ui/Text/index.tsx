import React, { type JSX } from "react";

import { useTextAnimation } from "@/shared/hooks/useAnimation";
import clsx, { type ClassValue } from "clsx";

interface Props {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: ClassValue;
  disableBreak?: boolean;
  color?: string;
  animation?:
    | {
        delay?: number;
        duration?: number;
      }
    | false;
}

export const Text: React.FC<Props> = ({
  as: Tag = "p",
  className,
  children,
  color = "u-text-gradient-[linear-gradient(to_bottom,#fcfeff,#aea9b8)]",
  animation = false,
  disableBreak = false,
}) => {
  const { rootRef } = useTextAnimation(animation || false);

  const TagTypes = Tag as any;

  return (
    <TagTypes
      className={clsx(
        className,
        "[&_span]:inline-block [&_span]:whitespace-pre-wrap",
        animation &&
          "[&_span]:translate-y-8 [&_span]:opacity-0 [&_span]:blur-md"
      )}
      ref={rootRef}
    >
      {disableBreak ? (
        <span className={color}>{children}</span>
      ) : (
        children.split(" ").map((item, id, arr) => (
          <span className={color} key={id}>
            {item}
            {arr.length !== id && " "}
          </span>
        ))
      )}
    </TagTypes>
  );
};

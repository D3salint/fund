import React, { type JSX } from "react";

import "./Text.scss";
import { useTextAnimation } from "@/shared/hooks/useAnimation";
import clsx, { type ClassValue } from "clsx";

interface Props {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: ClassValue;
  disableBreak?: boolean;
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
  animation = false,
  disableBreak = false,
}) => {
  const { rootRef } = useTextAnimation(animation || false );

  const TagTypes = Tag as any;

  return (
    <TagTypes
      className={clsx(
        className,
        "text-component",
        animation && "text-component-aos"
      )}
      ref={rootRef}
    >
      {disableBreak ? (
        <span>{children}</span>
      ) : (
        children.split(" ").map((item, id, arr) => (
          <span key={id}>
            {item}
            {arr.length !== id && " "}
          </span>
        ))
      )}
    </TagTypes>
  );
};

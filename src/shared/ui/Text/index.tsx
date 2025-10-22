import React, { type JSX } from "react";
import clsx, { type ClassValue } from "clsx";

import "./Text.scss";

interface Props {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: ClassValue[];
}

export const Text: React.FC<Props> = ({
  as: Tag = "p",
  className,
  children,
}) => {
  return <Tag className={clsx(className)}>{children}</Tag>;
};

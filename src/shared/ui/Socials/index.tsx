import React from "react";

import { XComIcon } from "../icons/XCom.icon";
import clsx from "clsx";

import css from "./Socials.module.scss";

interface Props {
  className?: string;
  classNameLink?: string;
  twitter?: string;
}

export const Socials: React.FC<Props> = ({
  className,
  classNameLink,
  twitter,
}) => {
  return (
    <div className={clsx(css.socials, className)}>
      {twitter && (
        <a
          className={clsx(css.socials_link, classNameLink)}
          href={twitter}
          target="_blank"
        >
          <XComIcon />
        </a>
      )}
    </div>
  );
};

import React from "react";

import clsx from "clsx";

import { Socials } from "../Socials";
import { Text } from "../Text";

import css from "./Partner.module.scss";

interface Props {
  name: string;
  position: string;
  review: string;
  x?: string;
  className?: string;
}

export const Partner: React.FC<Props> = ({
  name,
  position,
  review,
  className,
}) => {
  return (
    <div className={clsx(css.partner, className)}>
      <span className={css.dot} data-dir="nw" />
      <span className={css.dot} data-dir="ne" />
      <span className={css.dot} data-dir="sw" />
      <span className={css.dot} data-dir="se" />
      <div className={css.head}>
        <div className={css.head_col}>
          <div className={css.head_avatar}></div>
          <div className={css.head_info}>
            <Text className={css.name}>{name}</Text>
            <Text className={css.position}>{position}</Text>
          </div>
        </div>
        <Socials twitter="#" />
      </div>
      <Text className={[css.review, "text text-18"]}>{review}</Text>
    </div>
  );
};

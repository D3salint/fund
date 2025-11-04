import React from "react";

import clsx from "clsx";

import { Socials } from "../Socials";
import { Text } from "../Text";

interface Props {
  name: string;
  position: string;
  review: string;
  avatar: string;
  x?: string;
  className?: string;
}

export const Partner: React.FC<Props> = ({
  name,
  position,
  review,
  className,
  avatar,
}) => {
  return (
    <div
      className={clsx(
        "bg-[#0a0a0a] bg-[url(/images/partner-bg.jpg)] bg-bottom-left bg-cover p-7.5 pb-20 rounded-3xl border-b border-white/8 relative w-full max-xl:p-5 max-xl:pb-15 max-sm:p-4 max-sm:pb-9",
        className
      )}
    >
      <span className="absolute size-1.25 bg-[#d9d9d9] pointer-events-none -translate-1/2 left-0 top-0 max-sm:size-1" />
      <span className="absolute size-1.25 bg-[#d9d9d9] pointer-events-none -translate-1/2 left-full top-0 max-sm:size-1" />
      <span className="absolute size-1.25 bg-[#d9d9d9] pointer-events-none -translate-1/2 left-0 top-full max-sm:size-1" />
      <span className="absolute size-1.25 bg-[#d9d9d9] pointer-events-none -translate-1/2 left-full top-full max-sm:size-1" />
      <div className="flex items-start justify-between gap-4">
        <div className="max-sm:flex max-sm:items-center max-sm:gap-3 max-sm:mt-0">
          <div className="size-22.5 shrink-0 rounded-[50%] max-xl:size-16 max-sm:size-12.5">
            <img className="image-cover" src={avatar} />
          </div>
          <div className="mt-5.5">
            <Text
              className="font-tthoves text-2xl leading-tight -tracking-3 font-semibold text-[#d9d9d9] max-xl:text-[1.1185rem] max-sm:text-sm"
              color=""
            >
              {name}
            </Text>
            <Text
              className="mt-1.5 text-[1.375rem] font-medium -tracking-1 leading-3 text-[#d9d9d980] max-xl:mt-1 max-xl:text-[1.1125rem] max-sm:text-[0.8125rem]"
              color=""
            >
              {position}
            </Text>
          </div>
        </div>
        <Socials twitter="#" />
      </div>
      <Text
        className="mt-7 leading-normal text-[1.125rem] max-w-97.5 text-white/60 max-xl:text-base max-sm:text-[0.8125rem] max-sm:mt-3.5"
        color=""
      >
        {review}
      </Text>
    </div>
  );
};

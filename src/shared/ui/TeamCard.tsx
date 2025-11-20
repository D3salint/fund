import React from "react";

import { EmailIcon } from "./icons/EmailIcon";
import { PhoneIcon } from "./icons/PhoneIcon";
import clsx from "clsx";

interface Props {
  avatar: string;
  name: string;
  position: string;
  bio: string;
  email: string;
  phoneNumber: string;
  className?: string;
}

export function TeamCard({
  avatar,
  bio,
  email,
  name,
  phoneNumber,
  position,
  className,
}: Props) {
  return (
    <div className={clsx(className, "team-card relative py-1 h-full flex flec-col")}>
      <span className="absolute size-1.25 bg-[#6776FF] rounded-full pointer-events-none left-0 top-0 max-sm:size-1" />
      <span className="absolute size-1.25 bg-[#6776FF] rounded-full pointer-events-none -translate-x-full left-full top-0 max-sm:size-1" />
      <span className="absolute size-1.25 bg-[#6776FF] rounded-full pointer-events-none -translate-y-full left-0 top-full max-sm:size-1" />
      <span className="absolute size-1.25 bg-[#6776FF] rounded-full pointer-events-none -translate-full left-full top-full max-sm:size-1" />
      <div
        className={clsx(
          "border border-white/8 bg-[#0a0a0a]/55 backdrop-blur-xl",
          "grow rounded-[1.25rem] py-8 pl-7 pr-4.5 flex flex-col max-sm:p-5 max-sm:pb-5.5"
        )}
      >
        <div className="max-sm:flex max-sm:items-center max-sm:gap-3">
          <div className="size-21 shrink-0 rounded-full border border-white/9 max-sm:size-17">
            <img src={avatar} className="image-contain" />
          </div>
          <div className="flex flex-col gap-2 mt-3 max-sm:mt-0">
            <p className="font-tthoves font-semibold text-[1.375rem] leading-none -tracking-3 text-white/80">
              {name}
            </p>
            <p className="font-medium text-base leading-tight -tracking-1 text-[#d9d9d9]/50">
              {position}
            </p>
          </div>
        </div>
        <p className="mt-7.5 text-base leading-4 tracking-normal text-primary/40 max-w-83.5 min-h-38.75 max-sm:mt-3 max-sm:min-h-auto max-sm:text-sm">
          {bio}
        </p>
        <div className="mt-auto pt-6 flex flex-col gap-3 max-sm:pt-3 max-sm:gap-2">
          <p className="flex items-center gap-3 font-medium text-base leading-snug -tracking-1 text-[#d9d9d9]/50 max-sm:text-sm">
            <EmailIcon className="size-5 shrink-0" />
            {email}
          </p>
          <p className="flex items-center gap-3 font-medium text-base leading-snug -tracking-1 text-[#d9d9d9]/50 max-sm:text-sm">
            <PhoneIcon className="size-5 shrink-0" />
            {phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import { XComIcon } from "../icons/XCom.icon";
import clsx from "clsx";

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
    <div className={clsx("flex flex-wrap gap-2", className)}>
      {twitter && (
        <a
          className={clsx(
            "size-11.25 border border-white/7 rounded-full bg-white/4 flex justify-center items-center transition-[background_150ms_ease] hover:bg-white/7 max-sm:size-6.25",
            classNameLink
          )}
          href={twitter}
          target="_blank"
        >
          <XComIcon className="size-5 fill-white stroke-white shrink-0 max-sm:size-3" />
        </a>
      )}
    </div>
  );
};

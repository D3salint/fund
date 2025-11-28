import React from "react";

import { Button } from "./Button/Button";
import { ForwardIcon } from "./icons/ForwardIcon";
import clsx from "clsx";

export function ScheduleMeeting() {
  return (
    <Button
      className={clsx(
        "p-4 rounded-[100px] flex items-center justify-center gap-1 font-medium text-sm leading2 tracking-normal text-white text-left",
        "max-sm:text-xs",

        "before:absolute before:inset-0 before:rounded-[100px]",
        "before:bg-[linear-gradient(to_right,rgba(103,118,255,0.2),rgba(103,118,255,0.8))]",
        "before:z-1",
        "before:[transition-property:filter] before:duration-400 before:ease-in-out",

        "after:absolute after:inset-0 after:rounded-[100px]",
        "after:u-border-gradient-[linear-gradient(to_right,rgba(51,71,255,0.2),#3347FF)]",
        "after:z-1",

        "hover:before:brightness-75"
      )}
    >
      <div className="absolute inset-0 rounded-[100px] bg-[#1e202d] -z-1" />
      <span className="relative z-2 flex items-center gap-1">
        <ForwardIcon className="size-4.5 shrink-0 max-sm:size-3.5" />
        Schedule a Meeting
      </span>
    </Button>
  );
}

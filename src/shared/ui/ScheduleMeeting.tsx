import React from "react";

import { ForwardIcon } from "./icons/ForwardIcon";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";

export function ScheduleMeeting() {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const angle = { val: 0 };
    gsap.to(angle, {
      val: 360,
      repeat: -1,
      duration: 4,
      ease: "none",
      onUpdate() {
        gsap.set(buttonRef.current, { "--angle": `${angle.val}deg` });
      },
    });
  });

  return (
    <button
      ref={buttonRef}
      className={clsx(
        "buildfuture-button-aos relative overflow-hidden",
        "p-4 rounded-[100px] flex items-center justify-center gap-1 font-medium text-sm leading2 tracking-normal text-white text-left",
        "max-sm:text-xs",

        "before:absolute before:inset-0 before:rounded-[100px]",
        "before:bg-[linear-gradient(to_right,rgba(103,118,255,0.2),rgba(103,118,255,0.8))]",
        "before:z-0",
        "before:transition-all before:duration-400 before:ease-in-out",

        "after:absolute after:inset-0 after:rounded-[100px]",
        // "after:u-border-gradient-[linear-gradient(to_right,rgba(51,71,255,0.2),#3347FF)]",
        "after:u-border-gradient-[conic-gradient(from_var(--angle)_at_center,white,#3347FF,rgba(51,71,255,0.2),rgba(51,71,255,0.2),#3347FF,white)]",
        "after:z-1 after:p-[1.5px]!",

        "hover:before:brightness-75"
      )}
      style={
        {
          "--angle": "35deg",
        } as any
      }
      type="button"
    >
      <span className="relative z-2 flex items-center gap-1">
        <ForwardIcon className="size-4.5 shrink-0 max-sm:size-3.5" />
        Schedule a Meeting
      </span>
    </button>
  );
}

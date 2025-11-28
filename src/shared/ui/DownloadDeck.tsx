import React from "react";

import { DownloadIcon } from "./icons/DownloadIcon";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";

export function DownloadDeck() {
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
        "relative overflow-hidden buildfuture-button-aos",
        "p-4 rounded-[100px] flex items-center justify-center gap-1 font-medium text-sm leading2 tracking-normal text-white text-left",
        "max-sm:text-xs",

        "before:absolute before:inset-0 before:rounded-[100px]",
        "before:bg-[linear-gradient(to_bottom,rgba(51,51,51,0.3),rgba(0,0,0,0.3),rgba(0,0,0,0.3),rgba(51,51,51,0.3))]",
        "before:z-[-1]",
        "before:[transition-property:filter] before:duration-400 before:ease-in-out",

        "after:absolute after:inset-0 after:rounded-[100px]",
        "after:u-border-gradient-[conic-gradient(from_var(--angle)_at_center,rgba(51,71,255,0.2),#3347FF,rgba(51,71,255,0.2))]",
        "after:z-1",

        "hover:before:brightness-45",
      )}
      style={
        {
          "--angle": "0deg",
        } as any
      }
      type="button"
    >
      <DownloadIcon className="size-4.5 shrink-0 max-sm:size-3.5" /> Download
      Deck
    </button>
  );
}

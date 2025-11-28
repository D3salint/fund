import { DownloadIcon } from "./icons/DownloadIcon";
import clsx from "clsx";

export function DownloadDeck() {
  return (
    <button
      className={clsx(
        "relative overflow-hidden buildfuture-button-aos",
        "p-4 rounded-[100px] flex items-center justify-center gap-1 font-medium text-sm leading2 tracking-normal text-white text-left",
        "max-sm:text-xs",

        "before:absolute before:inset-0 before:rounded-[100px]",
        "before:bg-[linear-gradient(to_bottom,rgba(51,51,51,0.3),rgba(0,0,0,0.3),rgba(0,0,0,0.3),rgba(51,51,51,0.3))]",
        "before:z-[-1]",
        "before:transition-all before:duration-400 before:ease-in-out",

        "after:absolute after:inset-0 after:rounded-[100px]",
        "after:u-border-gradient-[linear-gradient(to_right,rgba(51,71,255,0.2),#3347FF)]",
        "after:z-1",

        "hover:before:brightness-45"
      )}
      type="button"
    >
      <DownloadIcon className="size-4.5 shrink-0 max-sm:size-3.5" /> Download
      Deck
    </button>
  );
}

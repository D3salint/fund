import { ArrowRightSmallIcon } from "./icons/ArrowRightSmallIcon";
import clsx from "clsx";

type Props = {
  action?: "prev" | "next";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ArrowButton({
  action = "prev",
  className,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "overflow-hidden p-px bg-white/30 rounded-lg relative disabled:[&_.animate-spin]:opacity-0 disabled:[&_svg]:opacity-40"
      )}
      type={type}
      aria-label={action}
    >
      <span className="absolute inset-0 grid grid-cols-2 animate-spin [animation-duration:3s] transition-opacity">
        <span className="bg-white h-1/2 w-full self-center origin-right scale-x-150" />
      </span>
      <span className="relative size-9.5 rounded-lg bg-[#05060A] flex items-center justify-center">
        <ArrowRightSmallIcon
          className={clsx(
            "size-2.5 stroke-white transition-opacity",
            action === "prev" ? "-scale-100" : ""
          )}
        />
      </span>
    </button>
  );
}

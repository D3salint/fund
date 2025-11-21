import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function HighlightLabel({ children, className }: Props) {
  return (
    <p
      className={clsx(
        "font-medium text-[0.8125rem] leading-4 tracking-normal text-center rounded-[100px]",
        "px-2.5 py-1.5 bg-[#171934] bg-[url(/images/icons/purple-button-container.svg)] bg-size-[100%_100%]",
        className
      )}
    >
      {children}
    </p>
  );
}

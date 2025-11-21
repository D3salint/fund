import clsx from "clsx";

interface Props {
  value: string | null;
  onChange(value: string | null): void;
  options: string[];
  title?: string;
  className?: string;
}

export function SegmentedControl({
  onChange,
  value,
  title,
  options,
  className,
}: Props) {
  return (
    <div className={clsx("", className)}>
      {title && (
        <p className="mb-2 font-semibold text-base leading-tight -tracking-1 u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.5))] max-sm:text-sm">
          {title}
        </p>
      )}
      <ul className="gap-x-1.5 gap-y-2 flex flex-wrap">
        {options.map((option) => (
          <li
            className={clsx(
              "px-2.5 rounded-[100px] border-2 border-[#4A4A4D] text-center h-10 flex items-center justify-center",
              "font-tthoves text-[1.75rem] -tracking-1 leading-none text-[#4A4A4D]",
              "cursor-pointer",
              "max-sm:text-xs max-sm:h-8.5 max-sm:px-3.5",
              value === option &&
                "bg-[#6776FF]/20 text-[#6776FF] border-[#6776FF]"
            )}
            onClick={() => onChange(option)}
            key={option}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

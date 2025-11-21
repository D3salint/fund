import clsx from "clsx";

interface RangeProps {
  value: number;
  onChange(value: number): void;
  title?: string;
  min?: number;
  max?: number;
  step?: number;
  className?: string;

  displayValue?: string;
  displayMin?: string;
  displayMax?: string;
}

export function InputRange({
  className,
  max,
  min,
  step,
  onChange,
  title,
  value,

  displayMax,
  displayMin,
  displayValue,
}: RangeProps) {
  return (
    <div className={clsx(className, "w-full")}>
      {title && (
        <p className="mb-2 font-semibold text-base leading-tight -tracking-1 u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.5))]">
          {title}
        </p>
      )}
      {displayValue && (
        <p className="mb-4 text-32 leading-none -tracking-1 text-primary">
          {displayValue}
        </p>
      )}
      <input
        className={clsx("input-range w-full")}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(ev) => onChange(parseFloat(ev.target.value))}
      />
      {(displayMin || displayMax) && (
        <div className="mt-2 flex items-center justify-between gap-2 font-tthoves font-sm -tracking-1 text-[#4A4A4D]">
          {displayMin && <p>{displayMin}</p>}
          {displayMax && <p className="ml-auto">{displayMax}</p>}
        </div>
      )}
    </div>
  );
}

import React from "react";

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
  const thumbRef = React.useRef<HTMLDivElement>(null);

  const progress = React.useMemo(() => {
    const minValue = min ?? 0;
    const maxValue = max ?? 100;
    return ((value - minValue) / (maxValue - minValue)) * 100;
  }, [value, min, max]);

  const updateThumbPos = (progress: number) => {
    if (!thumbRef.current) return;
    const thumb = thumbRef.current;
    const parent = thumb.parentElement as HTMLElement;
    const { width: thumbWidth } = thumb.getBoundingClientRect();
    const { width: parentWidth } = parent.getBoundingClientRect();

    const pos = (progress * parentWidth) / 100 - thumbWidth / 2;

    const xpx = Math.max(0, Math.min(pos, parentWidth - thumbWidth));

    thumb.style.translate = `${xpx}px -50%`;
  };

  const handleResize = () => {
    updateThumbPos(progress);
  };

  React.useEffect(() => {
    updateThumbPos(progress);
  }, [progress]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className={clsx(className, "w-full")}>
      <div className="max-sm:flex max-sm:items-center max-sm:gap-4 max-sm:justify-between">
        {title && (
          <p
            className={clsx(
              "mb-2 font-semibold text-base leading-tight -tracking-1 u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.5))]",
              "max-sm:mb-5"
            )}
          >
            {title}
          </p>
        )}
        {displayValue && (
          <p className="mb-4 text-32 leading-none -tracking-1 text-primary max-sm:mb-5 max-sm:text-18">
            {displayValue}
          </p>
        )}
      </div>
      <div className="relative flex">
        <input
          className={clsx("input-range w-full transition-all duration-300 ease-out")}
          style={{ "--progress": progress.toFixed(2) } as any}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(ev) => onChange(parseFloat(ev.target.value))}
        />
        <div
          className="flex items-center justify-center size-6 rounded-full shrink-0 bg-[#6776FF]/20 backdrop-blur-md absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 ease-out"
          ref={thumbRef}
        >
          <span className="size-1/2 rounded-full bg-[#6776FF]"></span>
        </div>
      </div>
      {(displayMin || displayMax) && (
        <div className="mt-2 flex items-center justify-between gap-2 font-tthoves text-sm -tracking-1 text-[#4A4A4D]">
          {displayMin && <p>{displayMin}</p>}
          {displayMax && <p className="ml-auto">{displayMax}</p>}
        </div>
      )}
    </div>
  );
}

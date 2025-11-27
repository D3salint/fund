import React from "react";

import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { roundToStep } from "../lib/roundToStep";

interface RangeProps {
  value: number;
  onChange(value: number): void;
  renderDisplayValue?(val: number): React.ReactNode;
  title?: string;
  min?: number;
  max?: number;
  step?: number;
  className?: string;

  displayValue?: string;
  displayMin?: string;
  displayMax?: string;

  rangeAnimation?: boolean;
  isAnimationStart?: boolean;
  animationDelay?: number;
}

export function InputRange({
  className,
  max = 100,
  min = 0,
  step,
  onChange,
  title,
  value,
  renderDisplayValue,

  displayMax,
  displayMin,
  displayValue,

  rangeAnimation,
  animationDelay,
  isAnimationStart
}: RangeProps) {
  const thumbRef = React.useRef<HTMLDivElement>(null);
  const [localValue, setLocalValue] = React.useState(
    rangeAnimation ? min : value
  );
  const [isAnimation, setAnimation] = React.useState(rangeAnimation);

  const progress = React.useMemo(() => {
    const minValue = min ?? 0;
    const maxValue = max ?? 100;
    return ((localValue - minValue) / (maxValue - minValue)) * 100;
  }, [min, max, localValue]);

  const updateThumbPos = (progress: number) => {
    if (!thumbRef.current) return;
    const thumb = thumbRef.current;
    const parent = thumb.parentElement as HTMLElement;
    const { width: thumbWidth } = thumb.getBoundingClientRect();
    const { width: parentWidth } = parent.getBoundingClientRect();

    const pos = (progress * parentWidth) / 100 - thumbWidth / 2;

    // const xpx = Math.max(0, Math.min(pos, parentWidth - thumbWidth));

    thumb.style.translate = `${pos}px -50%`;
  };

  const handleResize = () => {
    updateThumbPos(progress);
  };

  const handleBlur = () => {
    setLocalValue(step ? roundToStep(localValue, step) : localValue)
  }

  React.useEffect(() => {
    updateThumbPos(progress);
  }, [progress]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  React.useEffect(() => {
    if (isAnimation) return;
    onChange(step ? roundToStep(localValue, step) : value);
  }, [isAnimation, localValue]);

  useGSAP(() => {
    if(!rangeAnimation || !isAnimationStart) return;
    const data = { val: localValue }
    gsap.to(data, {
      val: value,
      duration: 1,
      delay: animationDelay,
      onUpdate: () => setLocalValue(data.val),
      onComplete: () => setAnimation(false)
    })
  }, { dependencies: [isAnimationStart] })

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
        {(displayValue || renderDisplayValue) && (
          <p className="mb-4 text-32 leading-none -tracking-1 text-primary max-sm:mb-5 max-sm:text-18">
            {displayValue || renderDisplayValue?.(localValue)}
          </p>
        )}
      </div>
      <div className="relative flex">
        <input
          className={clsx("input-range w-full")}
          style={{ "--progress": progress.toFixed(2) } as any}
          type="range"
          min={min}
          max={max}
          step={0.05}
          value={localValue}
          onChange={(ev) => setLocalValue(parseFloat(ev.target.value))}
          onMouseUp={handleBlur}
          onTouchEnd={handleBlur}
        />
        <div
          className="flex items-center justify-center size-6 rounded-full shrink-0 bg-[#6776FF]/20 backdrop-blur-md absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
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

// "use client";

// import React from "react";

// import clsx from "clsx";
// import gsap from "gsap";

// interface RangeProps {
//   value: number;
//   onChange(value: number): void;
//   title?: string;
//   min?: number;
//   max?: number;
//   step?: number;
//   className?: string;

//   displayValue?: string;
//   displayMin?: string;
//   displayMax?: string;

//   rangeAnimation?: boolean;
// }

// export function InputRange({
//   className,
//   max = 100,
//   min = 0,
//   step = 1,
//   onChange,
//   title,
//   value,

//   displayMax,
//   displayMin,
//   displayValue,
//   rangeAnimation
// }: RangeProps) {
//   const thumbRef = React.useRef<HTMLDivElement | null>(null);
//   const inputRef = React.useRef<HTMLInputElement | null>(null);
//   const rootRef = React.useRef<HTMLDivElement | null>(null);
//   const [localValue, setLocalValue] = React.useState(rangeAnimation ? min : value);

//   const progress = React.useMemo(() => {
//     const minValue = min ?? 0;
//     const maxValue = max ?? 100;
//     return ((value - minValue) / (maxValue - minValue)) * 100;
//   }, [value, min, max, localValue]);

//   const [smoothProgress, setSmoothProgress] = React.useState(0);
//   const isDraggingRef = React.useRef(false);
//   const tweenObj = React.useRef({ v: 0 });

//   const updateThumbPos = React.useCallback((p: number) => {
//     if (!thumbRef.current) return;
//     const thumb = thumbRef.current;
//     const parent = thumb.parentElement as HTMLElement | null;
//     if (!parent) return;
//     const { width: thumbWidth } = thumb.getBoundingClientRect();
//     const { width: parentWidth } = parent.getBoundingClientRect();

//     const pos = (p * parentWidth) / 100 - thumbWidth / 2;
//     const xpx = Math.max(0, Math.min(pos, parentWidth - thumbWidth));
//     thumb.style.transform = `translate(${xpx}px, -50%)`;
//   }, []);

//   React.useEffect(() => {
//     const root = rootRef.current;
//     if (root) root.style.setProperty("--progress", smoothProgress.toFixed(2));
//     updateThumbPos(smoothProgress);
//   }, [smoothProgress, updateThumbPos]);

//   React.useEffect(() => {
//     const handler = () => updateThumbPos(smoothProgress);
//     window.addEventListener("resize", handler);
//     return () => window.removeEventListener("resize", handler);
//   }, [smoothProgress, updateThumbPos]);

//   React.useEffect(() => {
//     if (isDraggingRef.current) {
//       gsap.killTweensOf(tweenObj.current);
//       setSmoothProgress(progress);
//       tweenObj.current.v = progress;
//       return;
//     }

//     gsap.killTweensOf(tweenObj.current);
//     const tween = gsap.to(tweenObj.current, {
//       v: progress,
//       duration: 0.9,
//       stagger: 0.3,
//       ease: "power1.out",
//       onUpdate: () => {
//         setSmoothProgress(Number(tweenObj.current.v));
//       },
//     });

//     return () => {
//       tween.kill();
//     };
//   }, [progress]);

//   React.useEffect(() => {
//     const input = inputRef.current;
//     if (!input) return;

//     const onPointerDown = () => {
//       isDraggingRef.current = true;
//       gsap.killTweensOf(tweenObj.current);
//       // во время drag — синхронизируем visual с текущим value мгновенно
//       setSmoothProgress(progress);
//       tweenObj.current.v = progress;
//       // слушаем global pointerup/touchend для завершения drag
//       window.addEventListener("pointerup", onPointerUp);
//       window.addEventListener("touchend", onPointerUp);
//     };

//     const onPointerUp = () => {
//       isDraggingRef.current = false;
//       // по завершению drag можно плавно продолжать анимировать при следующем изменении прогресса
//       window.removeEventListener("pointerup", onPointerUp);
//       window.removeEventListener("touchend", onPointerUp);
//     };

//     input.addEventListener("pointerdown", onPointerDown);
//     input.addEventListener("touchstart", onPointerDown);

//     return () => {
//       input.removeEventListener("pointerdown", onPointerDown);
//       input.removeEventListener("touchstart", onPointerDown);
//       window.removeEventListener("pointerup", onPointerUp);
//       window.removeEventListener("touchend", onPointerUp);
//     };
//   }, [progress]);

//   React.useEffect(() => {
//     if (isDraggingRef.current) {
//       setSmoothProgress(progress);
//       tweenObj.current.v = progress;
//     }
//   }, [progress]);

//   return (
//     <div ref={rootRef} className={clsx(className, "w-full")}>
//       <div className="max-sm:flex max-sm:items-center max-sm:gap-4 max-sm:justify-between">
//         {title && (
//           <p
//             className={clsx(
//               "mb-2 font-semibold text-base leading-tight -tracking-1 u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.5))]",
//               "max-sm:mb-5"
//             )}
//           >
//             {title}
//           </p>
//         )}
//         {displayValue && (
//           <p className="mb-4 text-32 leading-none -tracking-1 text-primary max-sm:mb-5 max-sm:text-18">
//             {displayValue}
//           </p>
//         )}
//       </div>

//       <div className="relative flex">
//         <input
//           ref={inputRef}
//           className={clsx(
//             "input-range w-full",
//             "transition-transform duration-200 ease-out"
//           )}
//           style={{ ["--progress" as any]: smoothProgress.toFixed(2) }}
//           type="range"
//           min={min}
//           max={max}
//           step={step}
//           value={value}
//           onChange={(ev) => onChange(parseFloat(ev.target.value))}
//         />

//         <div
//           className="flex items-center justify-center size-6 rounded-full shrink-0 bg-[#6776FF]/20 backdrop-blur-md absolute left-0 top-1/2 pointer-events-none transition-transform duration-200 ease-out"
//           ref={thumbRef}
//           style={{ transform: "translate(0px, -50%)" }}
//         >
//           <span className="size-1/2 rounded-full bg-[#6776FF]"></span>
//         </div>
//       </div>

//       {(displayMin || displayMax) && (
//         <div className="mt-2 flex items-center justify-between gap-2 font-tthoves text-sm -tracking-1 text-[#4A4A4D]">
//           {displayMin && <p>{displayMin}</p>}
//           {displayMax && <p className="ml-auto">{displayMax}</p>}
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";

import { useScroller } from "@/shared/ui/Scroller";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import type { ActiveDotProps } from "recharts/types/util/types";

import { marketGapData } from "./data";

type DotProps = ActiveDotProps & {
  active: boolean;
  styling: any;
};

const CustomDot = ({ active, styling, cx, cy }: DotProps) => {
  return (
    <g>
      <motion.circle
        cx={cx}
        cy={cy}
        r={styling.area.dot.r}
        strokeWidth={styling.area.dot.strokeWidth}
        fill={styling.fill}
        stroke={styling.stroke}
      />
      {active && (
        <>
          <motion.circle
            cx={cx}
            cy={cy}
            r={styling.area.dot.r * 5}
            fill={styling.fill}
            opacity={0.5}
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.25 }}
          />
          <motion.circle
            cx={cx}
            cy={cy}
            r={styling.area.dot.r * 1.5}
            strokeWidth={styling.area.dot.strokeWidth * 2}
            fill="white"
            stroke="#656988"
            initial={{ opacity: 0, r: 0 }}
            animate={{ opacity: 1, r: styling.area.dot.r * 1.5 }}
            transition={{ duration: 0.35 }}
          />
        </>
      )}
    </g>
  );
};

interface Props {
  className?: string;
  data?: Array<{ year: number; percent: number; days: number }>;
  disableFillArea?: boolean;
  animationActive?: boolean;
}

export function MarketGapAnalysisChart({
  data = marketGapData,
  className,
  disableFillArea,
  animationActive = true,
}: Props) {
  const { scrollerRef, isReady: isScrollerReady } = useScroller();
  const [isAnimated, setAnimated] = React.useState(!animationActive);
  const [isMobile, setMobile] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [activeTooltipIndex, setActiveTooltipIndex] = React.useState<
    number | null
  >(null);

  const checkViewport = () => setMobile(window.innerWidth <= 768);

  useGSAP(
    () => {
      if (!isScrollerReady || !animationActive) return;

      ScrollTrigger.create({
        trigger: rootRef.current,
        invalidateOnRefresh: true,
        scroller: scrollerRef.current,
        start: "top 60%",
        once: true,
        onEnter: () => setAnimated(true),
        onEnterBack: () => setAnimated(true),
      });
    },
    { scope: rootRef, dependencies: [animationActive, isScrollerReady] }
  );

  React.useEffect(() => {
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  });

  React.useEffect(() => checkViewport(), []);

  const settings = React.useMemo(() => {
    const root = {
      margin: isMobile
        ? { left: 8, right: 8, bottom: 8 }
        : { left: 10, right: 10, bottom: 10 },
    };

    const area = {
      strokeWidth: isMobile ? 1 : 3,
      dot: {
        r: isMobile ? 2 : 6,
        strokeWidth: isMobile ? 1 : 3,
      },
    };

    const axis = {
      width: isMobile ? 20 : 36,
      dx: isMobile ? 0 : 8,
      dy: isMobile ? 8 : 8,
    };

    const text = {
      font: isMobile
        ? "400 0.625rem/1.4 'Inter Tight'"
        : "400 0.75rem/1.4 'Inter Tight'",
    };

    return { root, text, area, axis };
  }, [isMobile]);

  return (
    <div
      className={clsx(
        "size-full [&_.recharts-surface]:overflow-visible! [&_.recharts-wrapper_*]:outline-none! relative",
        className
      )}
      ref={rootRef}
      onMouseLeave={() => setActiveTooltipIndex(null)}
    >
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={settings.root.margin}
          onMouseMove={(e) =>
            setActiveTooltipIndex(+(e.activeTooltipIndex as number) || null)
          }
          responsive
        >
          <defs>
            {/* Fill percent gradient */}
            <linearGradient id="fillPercent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.25} />
              <stop offset="80%" stopColor="#a78bfa" stopOpacity={0} />
            </linearGradient>

            {/* Fill days gradient */}
            <linearGradient id="fillDays" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6776FF" stopOpacity={0.25} />
              <stop offset="80%" stopColor="#6776FF" stopOpacity={0} />
            </linearGradient>

            {/* Line percent gradient*/}
            <linearGradient
              id="linePercentGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#030018" stopOpacity={1} />
              <stop offset="10%" stopColor="#9C77FF" stopOpacity={1} />
              <stop offset="90%" stopColor="#9C77FF" stopOpacity={1} />
              <stop offset="100%" stopColor="#030018" stopOpacity={1} />
            </linearGradient>

            {/* Line days gradient */}
            <linearGradient id="lineDaysGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#030018" stopOpacity={1} />
              <stop offset="10%" stopColor="#6776FF" stopOpacity={1} />
              <stop offset="90%" stopColor="#6776FF" stopOpacity={1} />
              <stop offset="100%" stopColor="#030018" stopOpacity={1} />
            </linearGradient>

            {/* Blur */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
              </feMerge>
            </filter>
          </defs>

          <CartesianGrid
            horizontal={false}
            stroke="#ffffff10"
            strokeWidth={1}
          />

          {/* Percent */}
          {isAnimated && (
            <Area
              yAxisId="left"
              fill={disableFillArea ? "none" : "url(#fillPercent)"}
              dataKey="percent"
              type="monotone"
              stroke="url(#linePercentGradient)"
              strokeWidth={settings.area.strokeWidth}
              activeDot={false}
              dot={(props) => (
                <CustomDot
                  {...props}
                  active={props.index === activeTooltipIndex}
                  styling={{
                    ...settings,
                    fill: "#9C77FF",
                    stroke: "#5C4A9A",
                  }}
                />
              )}
              animationBegin={0}
              animationDuration={1500}
            />
          )}

          <YAxis
            dx={-settings.axis.dx}
            width={settings.axis.width}
            yAxisId="left"
            dataKey="percent"
            stroke="#FFF"
            tickFormatter={(v) => v + "%"}
            tickLine={false}
            axisLine={false}
            style={{
              font: settings.text.font,
              letterSpacing: "0.01em",
              color: "#CCCCCC",
            }}
          />

          {/* Days */}
          {isAnimated && (
            <Area
              yAxisId="right"
              fill={disableFillArea ? "none" : "url(#fillDays)"}
              dataKey="days"
              type="monotone"
              stroke="url(#lineDaysGradient)"
              strokeWidth={settings.area.strokeWidth}
              activeDot={false}
              dot={(props) => (
                <CustomDot
                  {...props}
                  active={props.index === activeTooltipIndex}
                  styling={{ ...settings, fill: "#6776FF", stroke: "#3E4696" }}
                />
              )}
              animationBegin={0}
              animationDuration={1500}
            />
          )}

          <YAxis
            dx={settings.axis.dx}
            width={settings.axis.width}
            yAxisId="right"
            dataKey="days"
            stroke="#FFF"
            orientation="right"
            tickFormatter={(v) => v}
            tickLine={false}
            axisLine={false}
            style={{
              font: settings.text.font,
              letterSpacing: "0.01em",
              color: "#CCCCCC",
            }}
          />

          <XAxis
            dy={settings.axis.dy}
            dataKey="year"
            stroke="#8080a0"
            tick={{
              fill: "#a0a0c0",
            }}
            tickLine={false}
            axisLine={false}
            style={{
              font: settings.text.font,
              letterSpacing: "0.01em",
              color: "#626268",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

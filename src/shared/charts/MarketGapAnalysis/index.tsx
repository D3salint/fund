import React from "react";

import clsx from "clsx";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { marketGapData } from "./data";

interface Props {
  className?: string;
  data?: Array<{ year: number; percent: number; days: number }>;
  disableFillArea?: boolean;
}

export function MarketGapAnalysisChart({
  data = marketGapData,
  className,
  disableFillArea,
}: Props) {
  const [isMobile, setMobile] = React.useState(false);

  const checkViewport = () => setMobile(window.innerWidth <= 768);

  React.useEffect(() => {
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  });

  React.useEffect(() => checkViewport(), []);

  const settings = React.useMemo(() => {
    const root = {
      margin: isMobile ? { left: 8, right: 8, bottom: 8 } : { left: 10, right: 10, bottom: 10 }
    }

    const area = {
      strokeWidth: isMobile ? 1 : 3,
      dot: {
        r: isMobile ? 2 : 5,
        strokeWidth: isMobile ? 1 : 3,
      },
    };

    const axis = {
      width: isMobile ? 20 : 36,
      dx:  isMobile ? 0 : 8,
      dy: isMobile ? 8 : 8
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
        "size-full [&_.recharts-surface]:overflow-visible!",
        className
      )}
    >
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={settings.root.margin}
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
          </defs>

          <CartesianGrid
            horizontal={false}
            stroke="#ffffff10"
            strokeWidth={1}
          />

          {/* Percent */}
          <Area
            yAxisId="left"
            fill={disableFillArea ? "none" : "url(#fillPercent)"}
            dataKey="percent"
            type="monotone"
            stroke="url(#linePercentGradient)"
            strokeWidth={settings.area.strokeWidth}
            dot={{
              r: settings.area.dot.r,
              strokeWidth: settings.area.dot.strokeWidth,
              fill: "#9C77FF",
              fillOpacity: 1,
              stroke: "#5C4A9A",
            }}
          />

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
          <Area
            yAxisId="right"
            fill={disableFillArea ? "none" : "url(#fillDays)"}
            dataKey="days"
            type="monotone"
            stroke="url(#lineDaysGradient)"
            strokeWidth={settings.area.strokeWidth}
            dot={{
              r: settings.area.dot.r,
              strokeWidth: settings.area.dot.strokeWidth,
              fill: "#6776FF",
              fillOpacity: 1,
              stroke: "#3E4696",
            }}
          />
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

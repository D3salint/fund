"use client";

import React, { useContext } from "react";

import clsx from "clsx";

const ScrollerContext = React.createContext<{
  scrollerRef: { current: HTMLDivElement | null };
  isReady: boolean;
  isScrollActive: boolean;
  setScrollActive(bool: boolean): void;
}>({
  scrollerRef: { current: null },
  isReady: false,
  isScrollActive: true,
  setScrollActive: () => null,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useScroller = () => {
  return useContext(ScrollerContext);
};

export function Scroller({ children }: { children: React.ReactNode }) {
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [isReady, setReady] = React.useState(false);
  const [isScrollActive, setScrollActive] = React.useState(false);

  React.useEffect(() => {
    if (scrollerRef.current) {
      setReady(true);
    }
  }, []);

  return (
    <ScrollerContext.Provider
      value={{ scrollerRef, isReady, isScrollActive, setScrollActive }}
    >
      <div
        className={clsx(
          "fixed inset-0 overflow-auto",
          isScrollActive ? "overflow-x-hidden" : "overflow-hidden"
        )}
        ref={scrollerRef}
      >
        {children}
      </div>
    </ScrollerContext.Provider>
  );
}

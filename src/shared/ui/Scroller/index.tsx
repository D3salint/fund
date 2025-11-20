"use client";

import React, { useContext } from "react";

const ScrollerContext = React.createContext<{
  scrollerRef: { current: HTMLDivElement | null };
  isReady: boolean;
}>({
  scrollerRef: { current: null },
  isReady: false
});

// eslint-disable-next-line react-refresh/only-export-components
export const useScroller = () => {
  return useContext(ScrollerContext);
};

export function Scroller({ children }: { children: React.ReactNode }) {
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [isReady, setReady] = React.useState(false);

  React.useEffect(() => {
    if(scrollerRef.current) {
      setReady(true);
    }
  }, []); 

  return (
    <ScrollerContext.Provider value={{ scrollerRef, isReady }}>
      <div className="fixed inset-0 overflow-auto overflow-x-hidden" ref={scrollerRef}>
        {children}
      </div>
    </ScrollerContext.Provider>
  );
}

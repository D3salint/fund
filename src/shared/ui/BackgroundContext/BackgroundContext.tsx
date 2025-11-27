import React from "react";

interface BackgroundContextShape {
  setBackground: (src: string | null) => void;
  currentBackground: string | null;
}

export const BackgroundContext = React.createContext<BackgroundContextShape>({
  setBackground: () => {},
  currentBackground: null,
});

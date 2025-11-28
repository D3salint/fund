import React from "react";

export const HeroLoader: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
    <span className="text-white text-2xl font-tthoves">Loading...</span>
  </div>
);

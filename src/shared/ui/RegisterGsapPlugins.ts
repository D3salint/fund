import React from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const RegisterGsapPlugins = () => {
  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return null;
};

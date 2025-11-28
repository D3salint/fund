"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import React from "react";
import { CSSTransition } from "react-transition-group";

export function Preloader() {
  const [active, setActive] = React.useState(true);
  const [animationStarted, setAnimationStarted] = React.useState(false);
  const nodeRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if(!animationStarted) return;
    gsap.timeline()
      .to('.preloader-text', {
        maskImage: "linear-gradient(to left,transparent 0%, black 100%)",
        duration: 2
      }, 0.2)
      .to('.preloader-text', {
        filter: 'blur(15px)',
        opacity: 0,
        duration: 0.8
      })
  }, {
    dependencies: [animationStarted],
    scope: nodeRef
  })

  return (
    <CSSTransition
      in={active}
      timeout={500}
      nodeRef={nodeRef}
      unmountOnExit
      mountOnEnter
    >
      <div className="absolute inset-0 z-150" ref={nodeRef}>
        <video
          onPlay={setAnimationStarted.bind(null, true)}
          className="size-full object-cover object-center"
          src="/media/preloader_compressed.mp4"
          poster="/media/preloader_poster.jpg"
          playsInline
          autoPlay
          muted
        />
        <div className="absolute left-1/2 top-1/2 -translate-1/2">
          <p className={clsx(
            "preloader-text font-bold text-48 tracking-2 u-text-gradient-[linear-gradient(to_right,#F2F3F8,#6F74F0)]",
            "mask-[linear-gradient(to_left,transparent_100%,black_100%)] mask-size-[200%_100%]"
          )}>
            Welcome to
          </p>
        </div>
      </div>
    </CSSTransition>
  );
}

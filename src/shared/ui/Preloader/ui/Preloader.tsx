"use client";

import React from "react";
import { CSSTransition } from "react-transition-group";

import { useScroller } from "../../Scroller";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";

export function Preloader() {
  const [active, setActive] = React.useState(true);
  const [animationStarted, setAnimationStarted] = React.useState(false);
  const nodeRef = React.useRef<HTMLDivElement>(null);
  const { setScrollActive } = useScroller();

  useGSAP(
    () => {
      if (!animationStarted) return;
      setTimeout(() => setActive(false), 5550);

      gsap
        .timeline({ delay: 0.2 })
        .to(
          ".preloader-white-light",
          {
            opacity: 1,
            duration: 0.4,
          },
          0
        )
        .to(
          ".preloader-text",
          {
            maskImage: "linear-gradient(to left,transparent 0%, black 100%)",
            duration: 2,
          },
          0
        )
        .to(
          ".preloader-blue-light",
          {
            opacity: 1,
            duration: 0.4,
          },
          0.5
        )
        .to(
          ".preloader-box",
          {
            filter: "blur(15px)",
            opacity: 0,
            duration: 0.8,
          },
          2
        );
    },
    {
      dependencies: [animationStarted],
      scope: nodeRef,
    }
  );

  React.useEffect(() => {
    if (!active) {
      setScrollActive(true);
    }
  }, [active]);

  return (
    <CSSTransition
      classNames={{
        exit: "opacity-100",
        exitActive: "opacity-0! [transition:opacity_500ms_ease]!",
      }}
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
        <div className="preloader-box absolute left-1/2 top-1/2 -translate-1/2">
          <span
            className={clsx(
              "size-10 rounded-full absolute left-0 top-1/2 -translate-1/2 bg-[#F2F3F8] blur-2xl",
              "preloader-white-light opacity-0"
            )}
          />
          <span
            className={clsx(
              "size-10 rounded-full absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 bg-[#6F74F0] blur-2xl",
              "preloader-blue-light opacity-0"
            )}
          />
          <p
            className={clsx(
              "preloader-text font-bold text-48 tracking-2 u-text-gradient-[linear-gradient(to_right,#F2F3F8,#6F74F0)]",
              "mask-[linear-gradient(to_left,transparent_100%,black_100%)] mask-size-[200%_100%]",
              "max-sm:text-32"
            )}
          >
            Welcome to
          </p>
        </div>
      </div>
    </CSSTransition>
  );
}

import React, { type SVGProps } from "react";

export const StrategyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 12.8333L25.7368 10.3233C26.2456 9.85662 26.5 9.62328 26.5 9.33333M23 5.83333L25.7368 8.34338C26.2456 8.81005 26.5 9.04338 26.5 9.33333M26.5 9.33333C5.5 9.33333 5.5 24.5 5.5 24.5M17.1667 24.5L20.0833 21.5833M20.0833 21.5833L23 18.6667M20.0833 21.5833L23 24.5M20.0833 21.5833L17.1667 18.6667M11.3333 6.41667C11.3333 8.0275 10.0275 9.33333 8.41667 9.33333C6.80584 9.33333 5.5 8.0275 5.5 6.41667C5.5 4.80584 6.80584 3.5 8.41667 3.5C10.0275 3.5 11.3333 4.80584 11.3333 6.41667Z"
        stroke="url(#paint0_linear_6_4023)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_4023"
          x1="27.6667"
          y1="11.8118"
          x2="4.33599"
          y2="11.5628"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

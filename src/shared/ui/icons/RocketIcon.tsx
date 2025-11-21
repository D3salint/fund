import React, { type SVGProps } from "react";

export const RocketIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3304 4.66602H11.3364M1.6665 14.3327L4.99984 10.9994M5.6665 14.3327L6.99984 12.9994M1.6665 10.3327L2.99984 8.99935M8.85775 3.33529L7.86736 4.32568C7.05176 5.14128 6.81987 5.37317 5.93515 5.20194C5.25936 5.03298 4.60495 4.86941 4.11355 5.36081C3.51748 5.95688 3.5175 6.5006 4.11355 7.09666L8.90253 11.8856C9.49859 12.4817 10.0423 12.4817 10.6384 11.8856C11.1298 11.3942 10.9662 10.7398 10.7972 10.064C10.626 9.17932 10.8579 8.94743 11.6735 8.13182L12.6639 7.14144C13.779 6.0263 14.2416 4.56635 14.3172 3.02127C14.3466 2.42031 14.3613 2.11982 14.1203 1.87887C13.8794 1.63791 13.5789 1.65261 12.9779 1.68201C11.4328 1.7576 9.97289 2.22015 8.85775 3.33529Z"
        stroke="url(#paint0_linear_6_4860)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_4860"
          x1="15"
          y1="8.75209"
          x2="1.6517"
          y2="8.45299"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

import React, { type SVGProps } from "react";

export const ArrowRightSmallIcon: React.FC<SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      {...props}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2062_7416)">
        <path
          d="M9.24979 5.12521H1.00021M9.24979 5.12521L5.53748 8.83752M9.24979 5.12521L5.53748 1.4129"
          fill="none"
          strokeWidth="1.48"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2062_7416">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

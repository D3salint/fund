import React, { type SVGProps } from "react";

export const ArrowRightIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.5H10M10 5.5L7.13636 2.5M10 5.5L7.13636 8.5"
        fill="none"
        strokeWidth="1.03091"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

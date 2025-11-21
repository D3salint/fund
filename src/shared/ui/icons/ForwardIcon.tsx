import React, { type SVGProps } from "react";

export const ForwardIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 5.25H6.375C4.51104 5.25 3 6.76104 3 8.625C3 10.489 4.51104 12 6.375 12H14.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 14.25L14.2929 12.7071C14.6262 12.3738 14.7929 12.2071 14.7929 12C14.7929 11.7929 14.6262 11.6262 14.2929 11.2929L12.75 9.75"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

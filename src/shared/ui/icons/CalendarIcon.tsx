import React, { type SVGProps } from "react";

export const CalendarIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.9998 2.33301V4.66634M8.99984 2.33301V4.66634M15.9946 15.1663H16.0051M15.9946 19.833H16.0051M20.656 15.1663H20.6665M11.3332 15.1663H11.3436M11.3332 19.833H11.3436M6.08317 9.33301H25.9165M5.49984 9.33301H26.4998M14.8915 25.6663H17.1082C21.8104 25.6663 24.1616 25.6663 25.6224 24.0871C27.0832 22.5078 27.0832 19.9661 27.0832 14.8826V14.2835C27.0832 9.19993 27.0832 6.65817 25.6224 5.07892C24.1616 3.49967 21.8104 3.49967 17.1082 3.49967H14.8915C10.1892 3.49967 7.83811 3.49967 6.37731 5.07892C4.9165 6.65817 4.9165 9.19993 4.9165 14.2835V14.8826C4.9165 19.9661 4.9165 22.5078 6.37731 24.0871C7.83811 25.6663 10.1892 25.6663 14.8915 25.6663Z"
        stroke="url(#paint0_linear_6_4010)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_4010"
          x1="28.2501"
          y1="15.3863"
          x2="4.88945"
          y2="14.889"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

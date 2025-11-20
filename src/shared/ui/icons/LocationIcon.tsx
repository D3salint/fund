import React, { type SVGProps } from "react";

export const LocationIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6665 20.9997C8.53276 21.48 7.1665 22.218 7.1665 23.0456C7.1665 24.493 11.3452 25.6663 16.4998 25.6663C21.6545 25.6663 25.8332 24.493 25.8332 23.0456C25.8332 22.218 24.4669 21.48 22.3332 20.9997M19.4165 10.4997C19.4165 12.1105 18.1107 13.4163 16.4998 13.4163C14.889 13.4163 13.5832 12.1105 13.5832 10.4997C13.5832 8.88884 14.889 7.58301 16.4998 7.58301C18.1107 7.58301 19.4165 8.88884 19.4165 10.4997ZM17.9668 20.4088C17.5733 20.7878 17.0474 20.9997 16.5 20.9997C15.9527 20.9997 15.4267 20.7878 15.0332 20.4088C11.4299 16.9173 6.60089 13.0168 8.95583 7.35403C10.2291 4.29222 13.2856 2.33301 16.5 2.33301C19.7144 2.33301 22.7709 4.29222 24.0442 7.35403C26.3962 13.0097 21.5791 16.9293 17.9668 20.4088Z"
        stroke="url(#paint0_linear_6_4016)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_4016"
          x1="26.8159"
          y1="15.3863"
          x2="7.14113"
          y2="15.0336"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

import React from "react";

import { Motion } from "@/shared/ui/Motion";
import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";

const config = {
  list: [
    {
      icon: "/images/icons/rocket.svg",
      name: "Proprietary Deal Flow",
      text: "Exclusive access to emerging opportunities",
    },
    {
      icon: "/images/icons/flash.svg",
      name: "Strategic Advisory",
      text: "Hands-on operational support and guidance",
    },
    {
      icon: "/images/icons/building.svg",
      name: "Network Effect",
      text: "Deep industry relationships and partnerships",
    },
  ],
};

export const Investment: React.FC = () => {
  return (
    <Section
      className="py-5 px-4 flex flex-col items-center justify-center relative"
      circles={{ showOnEnter: true, hideOnLeave: true }}
    >
      <div className="max-w-213 w-full flex flex-col items-center">
        <div className="max-w-189 w-full">
          <Text
            className="font-tthoves font-semibold text-56 -tracking-4 leading-none text-center max-xxl:text-48 max-sm:text-40"
            classNameSpan="pb-0.5"
            animation={{}}
            as="h2"
          >
            Investment Thesis
          </Text>
          <Text
            className="text-center mt-6 text-base leading-4 tracking-1 mask-[linear-gradient(to_bottom,black,rgba(0,0,0,0.5))] max-sm:text-sm max-sm:mt-3"
            color="text-white"
            animation={{ delay: 0.15 }}
          >
            This New York-based private equity fund targets high-growth B2B SaaS
            startups, leveraging a proven 10-year track record and 25% net IRR
            to capitalize on the sector’s robust market fundamentals and
            accelerating digital transformation.
          </Text>
          <Text
            className="text-center mt-8 text-base leading-4 tracking-1 max-sm:mt-3 max-sm:text-sm"
            color="text-white/50"
            animation={{ delay: 0.5 }}
          >
            This New York-based private equity fund targets high-growth B2B SaaS
            startups, leveraging a proven 10-year track record and 25% net IRR
            to capitalize on the sector’s robust market fundamentals and
            accelerating digital transformation.
          </Text>
        </div>
        <Motion className="mt-16 w-full rounded-[1.25rem] bg-[linear-gradient(to_bottom,rgba(103,118,255,0.03),rgba(103,118,255,0.1))] backdrop-blur-3xl relative border-px before:u-border-gradient-[linear-gradient(to_right,rgba(103,118,255,0.2),rgba(103,118,255,1),rgba(103,118,255,0.2))] max-sm:mt-3">
          <Motion
            animationElement=".investment-item"
            initialState="[&_.investment-item]:translate-y-5 [&_.investment-item]:opacity-0"
            delay={0.25}
            stagger={0.15}
            className="grid grid-cols-[1fr_1px_1fr_1px_1fr] max-sm:flex max-sm:flex-wrap"
          >
            {config.list.map((item, id, arr) => (
              <React.Fragment key={item.name}>
                <div className="investment-item py-7 px-4 flex flex-col items-center max-sm:w-1/2 grow max-sm:p-5 max-sm:relative [&_.divider]:hidden max-sm:[&_.divider]:block">
                  <div className="max-w-53 w-full max-sm:max-w-full relative max-sm:h-full">
                    {/* Mobile horizontal line for 3rd element. Enabled in parent */}
                    {id === 2 && (
                      <div className="divider w-full h-px bg-white/15 absolute left-0 top-0 -translate-y-3 hidden" />
                    )}
                    {/* Mobile vertical line for 3rd element. Enabled in parent */}
                    {id === 1 && (
                      <div className="divider w-px h-full bg-white/15 absolute left-0 top-0 -translate-x-5 hidden" />
                    )}
                    {/* Card content */}
                    <img
                      src={item.icon}
                      className="size-9 object-contain object-center max-sm:size-6"
                    />
                    <Text
                      className="mt-5 font-semibold text-base leading-tight -tracking-1 max-sm:text-sm max-sm:mt-4"
                      color="u-text-gradient-[linear-gradient(to_bottom,rgba(255,255,255,0.5),rgba(255,255,255,0.8))]"
                    >
                      {item.name}
                    </Text>
                    <Text
                      className="mt-3.5 text-base leading-4 tracking-normal max-sm:text-sm max-sm:mt-2"
                      color="text-primary/50"
                    >
                      {item.text}
                    </Text>
                  </div>
                </div>
                {/* Desktop vertical line */}
                {id !== arr.length - 1 && (
                  <div className="h-12.5 bg-white/20 my-auto max-sm:hidden!" />
                )}
              </React.Fragment>
            ))}
          </Motion>
        </Motion>
      </div>
    </Section>
  );
};

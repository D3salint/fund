import React from "react";

import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";

export const Team: React.FC = () => {
  return (
    <Section className="px-4 py-6 flex flex-col justify-center">
      <div className="max-w-252.5 w-full mx-auto">
        <Text
          className="font-tthoves text-56 font-semibold leading-none -tracking-4 max-sm:text-32 [&_span]:first:block"
          // animation={{}}
          as="h2"
        >
          Meet the Team
        </Text>
        <Text
          className="mt-9 max-w-93 text-base leading-4 tracking-normal"
          color="text-primary/50"
        >
          Demonstrating the investment opportunity created by declining
          early-stage capital allocation against rapidly expanding AI-driven
          enterprise software adoption in New York’s technology ecosystem
        </Text>
      </div>
      <div className="mt-25">
        <div className="max-w-252.5 w-full mx-auto"></div>
      </div>
    </Section>
  );
};

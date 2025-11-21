"use client";

import React from "react";

import { ContentCard } from "@/shared/ui/ContentCard";
import { InputRange } from "@/shared/ui/InputRange";
import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";
import { useFormik } from "formik";

interface Inputs {
  commitments: number;
  preferredReturn: number;
  grossFundReturn: number;
  gpCatchUp: number;
  fundLife: string | null;
  gpCarrySplit: string | null;
  managmentFee: number;
}

export const Calculator: React.FC = () => {
  const form = useFormik<Inputs>({
    initialValues: {
      commitments: 30,
      preferredReturn: 8,
      grossFundReturn: 15,
      gpCatchUp: 2,
      fundLife: null,
      gpCarrySplit: null,
      managmentFee: 2,
    },
    onSubmit() {},
  });

  return (
    <Section className="py-6 px-4 flex flex-col justify-center">
      <div className="mx-auto max-w-380 w-full">
        <Text
          className="font-tthoves text-56 font-semibold leading-none -tracking-4 max-sm:text-[1.75rem] text-center"
          // animation={{}}
          as="h2"
        >
          Fund Economics Calculator
        </Text>
        <Text
          className="mx-auto mt-6 text-center max-w-72.5 w-full text-base leading-4 tracking-normal"
          color="text-primary/60"
        >
          See how much the fund manager could earn based on your fund parameters
        </Text>
        <ContentCard className="backdrop-blur-3xl rounded-[3.75rem] mt-10 p-7.5 py-6.25 grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-tthoves font-semibold text-32 -tracking-3 u-text-gradient-[linear-gradient(to_right,#FFF,rgba(255,255,255,0.4))]">
              Fund Assumptions
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 grid-flow-dense">
              <InputRange
                min={5}
                max={500}
                step={1}
                value={form.values.commitments}
                onChange={(v) => form.setFieldValue("commitments", v)}
                displayValue={`${form.values.commitments}M`}
                displayMin="5M"
                displayMax="500M"
                title="Commitments Raised (Day 0)"
              />
            </div>
          </div>
          <div>
            <h3 className="font-tthoves font-semibold text-32 -tracking-3 u-text-gradient-[linear-gradient(to_right,#FFF,rgba(255,255,255,0.4))]">
              Fund Economics
            </h3>
          </div>
        </ContentCard>
      </div>
    </Section>
  );
};

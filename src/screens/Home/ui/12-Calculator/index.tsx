"use client";

import React from "react";

import { ContentCard } from "@/shared/ui/ContentCard";
import { InputRange } from "@/shared/ui/InputRange";
import { Section } from "@/shared/ui/PageWrapper";
import { SegmentedControl } from "@/shared/ui/SegmentedControl";
import { Text } from "@/shared/ui/Text";
import clsx from "clsx";
import { useFormik } from "formik";

const config = {
  gp: [
    { name: "Management Fees", value: "$3.6M" },
    { name: "Carry (Catch-up + Split)", value: "$7.8M" },
    { name: "Total GP Earnings", value: "$7.8M" },
  ],
  lp: [
    { name: "Capital Returned", value: "$30.0M" },
    { name: "Preferred Return", value: "$17.6M" },
    { name: "Profit Share", value: "$14.0M" },
    { name: "Total LP Return", value: "$61.6M" },
  ],
  summary: [
    { name: "Terminal Gross Value", value: "$69.4M" },
    { name: "Management Fees", value: "$3.6M" },
    { name: "GP Carry", value: "$4.2M" },
    { name: "LP Total", value: "$61.6M" },
  ],
};

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
          className="mx-auto mt-6 text-center max-w-72.5 w-full text-base leading-4 tracking-normal max-sm:mt-3 max-sm:text-sm"
          color="text-primary/60"
        >
          See how much the fund manager could earn based on your fund parameters
        </Text>
        <ContentCard
          className={clsx(
            "before:backdrop-blur-3xl rounded-[3.75rem] mt-10 p-7.5 py-6.25 grid grid-cols-2 gap-6 max-sm:mt-5",
            "max-lg:grid-cols-1 max-sm:py-4.5 max-sm:px-4 max-sm:rounded-2xl"
          )}
        >
          {/* Left */}
          <div>
            <h3
              className={clsx(
                "font-tthoves font-semibold text-32 -tracking-3 u-text-gradient-[linear-gradient(to_right,#FFF,rgba(255,255,255,0.4))]",
                "max-sm:text-18"
              )}
            >
              Fund Assumptions
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 grid-flow-dense max-sm:grid-cols-1 max-sm:gap-4.5">
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
              <InputRange
                min={0}
                max={12}
                step={1}
                value={form.values.preferredReturn}
                onChange={(v) => form.setFieldValue("preferredReturn", v)}
                displayValue={`${form.values.preferredReturn}%`}
                displayMin="0%"
                displayMax="12%"
                title="Preferred Return"
              />
              <InputRange
                min={0}
                max={40}
                step={1}
                value={form.values.grossFundReturn}
                onChange={(v) => form.setFieldValue("grossFundReturn", v)}
                displayValue={`${form.values.grossFundReturn}%`}
                displayMin="0%"
                displayMax="40%"
                title="Gross Fund Return"
              />
              <InputRange
                min={0}
                max={5}
                step={1}
                value={form.values.gpCatchUp}
                onChange={(v) => form.setFieldValue("gpCatchUp", v)}
                displayValue={`${form.values.gpCatchUp}%`}
                displayMin="0%"
                displayMax="5%"
                title="GP Catch-up)"
              />
              <div className="flex flex-col gap-y-8 max-sm:gap-4.5">
                <InputRange
                  min={0.5}
                  max={3}
                  step={0.1}
                  value={form.values.managmentFee}
                  onChange={(v) => form.setFieldValue("managmentFee", v)}
                  displayValue={`${form.values.managmentFee}%`}
                  displayMin="0.5%"
                  displayMax="3%"
                  title="Management Fee"
                />
                <SegmentedControl
                  value={form.values.fundLife}
                  onChange={(v) => form.setFieldValue("fundLife", v)}
                  options={["3years", "5years", "6years", "8years", "10years"]}
                  title="Fund Life"
                />
              </div>
              <div className="flex flex-col gap-y-8  max-sm:gap-4.5">
                <div className="flex flex-col gap-2">
                  <p className="mb-2 font-semibold text-base leading-tight -tracking-1 u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.5))] max-sm:gap-1">
                    GP Carry Split
                  </p>
                  <p className="text-32 leading-none -tracking-1 text-primary max-sm:text-[1.5rem]">
                    2%
                  </p>
                </div>
                <SegmentedControl
                  value={form.values.gpCarrySplit}
                  onChange={(v) => form.setFieldValue("gpCarrySplit", v)}
                  options={["10%", "15%", "20%", "25%", "30%"]}
                  title="GP Carry Split"
                />
              </div>
            </div>
          </div>
          {/* Right */}
          <ContentCard
            className="flex flex-col rounded-4xl p-7.5 py-6.5 max-sm:rounded-2xl max-sm:px-4 max-sm:py-4.5"
            bgGradient="before:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.018),rgba(255,255,255,0.06))]"
          >
            <h3 className="font-tthoves font-semibold text-32 -tracking-3 u-text-gradient-[linear-gradient(to_right,#FFF,rgba(255,255,255,0.4))] max-sm:text-18">
              Fund Economics
            </h3>
            <div className="grow mt-6 grid grid-cols-2 gap-x-2 gap-y-5.5 max-sm:mt-5 max-sm:grid-cols-1 max-sm:gap-2">
              <ContentCard
                className="p-5 pt-6 rounded-[1.25rem] before:backdrop-blur-3xl max-sm:rounded-xl max-sm:px-3 max-sm:py-4"
                bgGradient="before:bg-[linear-gradient(to_bottom,rgba(156,119,255,0.015),rgba(156,119,255,0.05))]"
                borderGradient="after:u-border-gradient-[linear-gradient(170deg,rgba(156,119,255,0.5),rgba(156,119,255,0))]"
              >
                <p className="font-semibold text-2xl leading-none text-white/80 max-xl:text-18">
                  GP Economics
                </p>
                <ul className="mt-3 ">
                  {config.gp.map((item) => (
                    <li
                      className="group py-2.5 not-last:border-b not-last:border-b-white/10 flex items-center gap-3 justify-between"
                      key={item.name + item.value}
                    >
                      <p className="name text-base leading-4 tracking-normal text-white/50 group-last:text-[#9C77FF] max-xxl:text-sm max-sm:text-xs">
                        {item.name}
                      </p>
                      <p className="value text-right font-tthoves text-2xl leading-none -tracking-1 text-primary group-last:text-[#9C77FF]/80 max-xxl:text-18 max-sm:text-xs">
                        {item.value}
                      </p>
                    </li>
                  ))}
                </ul>
              </ContentCard>
              <ContentCard
                className="p-5 pt-6 rounded-[1.25rem] before:backdrop-blur-3xl max-sm:rounded-xl max-sm:px-3 max-sm:py-4"
                bgGradient="before:bg-[linear-gradient(to_bottom,rgba(103,118,255,0.015),rgba(103,118,255,0.05))]"
                borderGradient="after:u-border-gradient-[linear-gradient(170deg,rgba(103,118,255,0.5),rgba(103,118,255,0))]"
              >
                <p className="font-semibold text-2xl leading-none text-white/80 max-xl:text-18">
                  LP Economics
                </p>
                <ul className="mt-3 ">
                  {config.lp.map((item) => (
                    <li
                      className="group py-2.5 not-last:border-b not-last:border-b-white/10 flex items-center gap-3 justify-between last:pb-0"
                      key={item.name + item.value}
                    >
                      <p className="name text-base leading-4 tracking-normal text-white/50 group-last:text-[#6776FF] max-xxl:text-sm max-sm:text-xs">
                        {item.name}
                      </p>
                      <p className="value text-right font-tthoves text-2xl leading-none -tracking-1 text-primary group-last:text-[#6776FF]/80 max-xxl:text-18 max-sm:text-xs">
                        {item.value}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-0.5 font-tthoves text-sm -tracking-1 leading-tight text-[#4A4A4D] flex items-center justify-between gap-3">
                  <span>MOIC</span>
                  <span className="text-right">2.05×</span>
                </p>
              </ContentCard>
              <ContentCard
                className="p-5 pt-6 rounded-[1.25rem] col-start-1 col-end-3 grow max-sm:col-auto max-sm:rounded-xl max-sm:px-3 max-sm:py-4"
                borderGradient="after:u-border-gradient-[linear-gradient(to_right,rgba(103,118,255,0.2),rgba(103,118,255,1),rgba(103,118,255,0.2))]"
                bgGradient="bg-[url(/images/calculator-summary-bg.png)] bg-cover bg-bottom"
              >
                <p className="font-semibold text-2xl leading-none text-white/80 max-xl:text-18">
                  Summary
                </p>
                <ul className="mt-5 grid grid-cols-4 gap-2.5 max-xxl:grid-cols-2 max-sm:mt-3 max-sm:gap-2">
                  {config.summary.map((item) => (
                    <ContentCard
                      className="p-4 rounded-[1.25rem] before:backdrop-blur-3xl flex flex-col justify-between gap-10 max-xxl:gap-3 max-sm:p-3 max-sm:rounded-xl"
                      as="li"
                      key={item.name + item.value}
                    >
                      <p className="font-semibold text-base leading-tight -tracking-1 u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.5))] max-sm:text-xs">
                        {item.name}
                      </p>
                      <p className="font-tthoves text-32 leading-tight -tracking-1 text-primary max-xxl:text-20">
                        {item.value}
                      </p>
                    </ContentCard>
                  ))}
                </ul>
              </ContentCard>
            </div>
          </ContentCard>
        </ContentCard>
      </div>
    </Section>
  );
};

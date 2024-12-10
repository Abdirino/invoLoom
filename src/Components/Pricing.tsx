"use client";
/* eslint-disable react/jsx-key */
import CheckIcon from "@/assets/icons/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Enterprise",
    monthlyPrice: 49,
    description: "For large organizations needing top-level security, custom reporting, dedicated support.",
    buttonText: "Get Enterprise",
    popular: false,
    inverse: false,
    features: [
      "Lead Scoring & Prioritization",
      "Seamless CRM Integration",
      "Team Collaboration Tools",
      "Advanced Analytics & Insights",
      "Dedicated Account Manager",
      "Custom API Access",
      "Unlimited User Seats",
      "Enterprise-Level Security",
      "Custom Reports & Dashboards",
    ],
  },
  {
    title: "Growth",
    monthlyPrice: 19,
    description: "Tailored for businesses scaling their outreach and team operations.",
    buttonText: "Get Growth",
    popular: true,
    inverse: true,
    features: [
      "Smart Email Automation",
      "AI-Powered Personalization",
      "Lead Scoring & Prioritization",
      "Seamless CRM Integration",
      "Team Collaboration Tools",
      "Advanced Analytics & Insights",
      "Priority Support",
    ],
  },
  {
    title: "Starter",
    monthlyPrice: 0,
    description: "Designed for small teams or individuals starting their outreach journey.",
    buttonText: "Get Started",
    popular: false,
    inverse: false,
    features: [
      "Smart Email Automation",
      "AI-Powered Personalization",
      "Lead Scoring & Prioritization",
      "Essential Analytics",
      "Email Support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-28 md:px-14 px-7">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title mt-5">Pricing</h2>
          <p className="section-description mt-4">
            Fuel Your Outreach — Flexible Plans for Every Stage of Growth
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              description,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              // eslint-disable-next-line react/jsx-key
              <div
              key={title}
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-grey/50">
                    /month
                  </span>
                </div>
                <div>
                  <p className="text-sm mt-4 text-gray-500">{description}</p>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[24px] hover:bg-[#ff7043]",
                    inverse === true && "bg-[#00D8A3] text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-[32px]">
                  {features.map((feature) => (
                    <li key={feature} className="text-sm flex items-center gap-2">
                      ✔
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

// components/PlanCard.jsx
import React from "react";
import Badge from "../HeroItems/Badge";
import Buttons from "../CommonComponents/Buttons";

export default function PriceCard({ plan }) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 sm:p-10 transition-all duration-300 ${
        plan.highlighted
          ? "border-3 border-blue-500 shadow-xl scale-105"
          : "border border-gray-200 shadow-sm hover:shadow-md"
      }`}
    >
      {plan.badge && <Badge text={plan.badge} />}

      <h3 className="text-2xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        {plan.name}
      </h3>

      <div className="mb-3">
        {typeof plan.price === "number" ? (
          <div className="flex items-baseline">
            <span className="text-5xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
              ${plan.price}
            </span>
            <span className="text-gray-600 ml-2 sm:ml-3 text-semibold sm:text-xl">
              /month
            </span>
          </div>
        ) : (
          <div className="font-inter font-medium text-[36px] leading-[40px] tracking-[0.37px] text-[#0A0A0A]">
            {plan.price}
          </div>
        )}
      </div>

      <p className="text-gray-600 mb-6 sm:mb-8 text-medium sm:text-lg">
        {plan.description}
      </p>

      <Buttons
        text={plan.buttonText}
        className={`w-full mb-6 sm:mb-10 text-base sm:text-lg ${plan.buttonStyle}`}
        showArrow={false}
      />

      <ul className="space-y-4 sm:space-y-5">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 sm:gap-4">
            <svg
              className="w-5 h-5 sm:w-7 sm:h-7 text-green-500 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-700 text-sm sm:text-lg">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

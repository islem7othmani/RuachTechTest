import React from "react";
import PriceCard from "../PricesComponents/PriceCard.jsx";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: 29,
      description: "Perfect for small teams",
      buttonText: "Get Started",
      buttonStyle: "bg-white border-2 border-gray-200 text-gray-900 hover:bg-gray-50",
      features: ["Up to 5 team members", "10GB storage", "Basic analytics", "Email support"],
      highlighted: false,
    },
    {
      name: "Professional",
      price: 79,
      description: "For growing businesses",
      buttonText: "Get Started",
      buttonStyle: "bg-black text-white hover:bg-gray-800",
      features: [
        "Up to 20 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      buttonText: "Contact Sales",
      buttonStyle: "bg-white border-2 border-gray-200 text-gray-900 hover:bg-gray-50",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Custom SLA",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-inter font-normal text-[36px] leading-[40px] tracking-[0.37px] text-[#0A0A0A] mb-8">
            Simple, transparent pricing
          </h2>
          <p className="text-2xl sm:text-xl md:text-2xl font-inter font-normal leading-[28px] tracking-[-0.45px] text-[#4A5565]">
            Choose the plan that's right for your team
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PriceCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

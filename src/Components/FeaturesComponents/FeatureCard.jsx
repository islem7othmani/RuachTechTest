// components/FeatureCard.jsx
import React from "react";

export default function FeatureCard({ icon, iconBg, iconColor, title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
      <div className={`${iconBg} ${iconColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">{title}</h3>
      <p className="font-inter font-normal leading-[24px] tracking-[-0.31px] text-[#717182] text-lg">
        {description}
      </p>
    </div>
  );
}

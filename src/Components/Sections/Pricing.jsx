import React from 'react';
import Badge from '../HeroItems/Badge'; 
import Buttons from '../CommonComponents/Buttons'; 

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: 29,
      description: 'Perfect for small teams',
      buttonText: 'Get Started',
      buttonStyle: 'bg-white border-2 border-gray-200 text-gray-900 hover:bg-gray-50',
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic analytics',
        'Email support'
      ],
      highlighted: false
    },
    {   
      name: 'Professional',
      price: 79,
      description: 'For growing businesses',
      buttonText: 'Get Started',
      buttonStyle: 'bg-black text-white hover:bg-gray-800',
      features: [
        'Up to 20 team members',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'Custom integrations'
      ],
      highlighted: true,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-white border-2 border-gray-200 text-gray-900 hover:bg-gray-50',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Enterprise analytics',
        '24/7 dedicated support',
        'Custom SLA'
      ],
      highlighted: false
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your team
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 sm:p-10 transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-3 border-blue-500 shadow-xl scale-105' 
                  : 'border border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.badge && <Badge text={plan.badge} />} 

              <h3 className="text-2xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                {plan.name}
              </h3>

              <div className="mb-3">
                {typeof plan.price === 'number' ? (
                  <div className="flex items-baseline">
                    <span className="text-5xl sm:text-4xl md:text-5xl font-semibold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2 sm:ml-3 text-semibold sm:text-xl">/month</span>
                  </div>
                ) : (
                  <div className="text-4xl sm:text-5xl md:text-7xl font-semibold text-gray-900">{plan.price}</div>
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
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 sm:gap-4">
                    <svg className="w-5 h-5 sm:w-7 sm:h-7 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-lg">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

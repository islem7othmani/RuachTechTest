import React from 'react';

export default function FeaturesSection() {
 const features = [
    {
      icon: <img src="/Images/lightning fast.png" alt="lightning fast" />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Lightning Fast",
      description: "Optimized performance with sub-100ms response times",
    },
    {
      icon: <img src="/Images/secure by default.png" alt="secure by default" />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Secure by Default",
      description: "Enterprise-grade security with end-to-end encryption",
    },
    {
      icon: <img src="/Images/advanced analytics.png" alt="advanced analytics" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Advanced Analytics",
      description: "Real-time insights with customizable dashboards",
    },
    {
      icon: <img src="/Images/team collaboration.png" alt="team collaboration" />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      title: "Team Collaboration",
      description: "Built for teams with real-time collaboration tools",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-10">
      <div className=" mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Built for the detail-oriented
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-2xl mx-auto">
            Every feature designed with precision and care. Experience the difference quality makes.
          </p>
        </div>
      
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-4 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${feature.iconBg} ${feature.iconColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#717182] text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>   
  );
}
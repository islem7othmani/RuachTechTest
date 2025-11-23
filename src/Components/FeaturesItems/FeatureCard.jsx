export default function FeatureCard({ icon, iconBg, iconColor, title, description }) {
  return (
    <div className="bg-white border border-4 border-gray-200 rounded-2xl p-6 w-96 hover:shadow-lg transition-shadow">
      <div className={`${iconBg} ${iconColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed w-81">{description}</p>
    </div>
  );
}

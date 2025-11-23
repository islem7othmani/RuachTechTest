const circles = [
  "from-[#FB64B6] to-[#FF6467]",
  "from-[#00D3F2] to-[#51A2FF]",
  "from-[#05DF72] to-[#00D492]",
  "from-[#C27AFF] to-[#7C86FF]",
];

const Star = () => (
  <svg className="w-6 h-6 fill-yellow-400 text-[#F0B100]" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function TrustBadge() {
  return (
    <div className="flex items-center gap-4 pt-4">
      <div className="flex -space-x-2">
        {circles.map((gradient, index) => (
          <div
            key={index}
            className={`w-10 h-10 rounded-full bg-gradient-to-r ${gradient} border-2 border-white`}
          ></div>
        ))}
      </div>
      <div>
        <p className="text-2xl text-gray-600">Trusted by 10,000+ developers</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
          <span className="text-lg font-medium text-[#F0B100] ml-1">4.9/5 rating</span>
        </div>
      </div>
    </div>
  )
}

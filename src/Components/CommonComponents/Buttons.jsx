export default function Buttons({ text, showArrow = false, className = "" }) {
  return (
    <button
      className={`px-8 py-4 rounded-lg font-medium transition-colors cursor-pointer ${
        showArrow ? "flex items-center gap-2 justify-center" : "text-center"
      } ${className}`}
    >
      {text}
      {showArrow && (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </button>
  );
}

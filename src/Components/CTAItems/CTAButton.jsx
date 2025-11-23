export default function CTAButton({ children, className }) {
  return (
    <button
      className={`${className} px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg`}
    >
      {children}
    </button>
  );
}  

function Logo({ textColor }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl"></div>
      <span className={`text-2xl font-semibold text-${textColor}`}>
        Detailify
      </span>
    </div>
  );
}

export default Logo;

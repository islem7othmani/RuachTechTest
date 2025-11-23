function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8 text-xl lg:text-xl md:text-lg sm:text-lg">
      <a
        href="#features"
        className="text-[#4A5565] hover:text-gray-900 transition-colors"
      >
        Features
      </a>
      <a
        href="#pricing"
        className="text-[#4A5565] hover:text-gray-900 transition-colors"
      >
        Pricing
      </a>
      <a
        href="#about"
        className="text-[#4A5565] hover:text-gray-900 transition-colors"
      >
        About
      </a>
      <a
        href="#dashboard"
        className="text-[#4A5565] hover:text-gray-900 transition-colors"
      >
        Dashboard
      </a>
    </nav>
  );
}

export default NavLinks;

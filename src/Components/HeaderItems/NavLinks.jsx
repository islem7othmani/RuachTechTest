function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8 ">
      <a
        href="#features"
        className="font-inter font-normal text-base leading-6 tracking-tight text-[#4A5565] hover:text-gray-900 "
      >
        Features
      </a>
      <a
        href="#pricing"
        className="font-inter font-normal text-base leading-6 tracking-tight text-[#4A5565] hover:text-gray-900 "
      >
        Pricing
      </a>
      <a
        href="#about"
        className="font-inter font-normal text-base leading-6 tracking-tight text-[#4A5565] hover:text-gray-900 "
      >
        About
      </a>
      <a
        href="#dashboard"
        className="font-inter font-normal text-base leading-6 tracking-tight text-[#4A5565] hover:text-gray-900 "
      >
        Dashboard
      </a>
    </nav>
  );
}

export default NavLinks;

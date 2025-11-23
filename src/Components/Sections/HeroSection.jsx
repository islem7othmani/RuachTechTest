import Badge from '../HeroItems/Badge';
import ImageHero from '../HeroItems/ImageHero';
import TrustBadge from '../HeroItems/TrustBadge';
import Buttons from '../CommonComponents/Buttons';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 w-11/12">
            <div className="relative top-4 md:top-8">
              <Badge text="New Release v2.0" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold leading-tight">
              Build with precision and{' '}
              <span className="pl-2 md:pl-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                attention to detail
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mt-4 md:mt-6">
              The modern platform for teams who care about quality. Every pixel matters, every interaction counts.
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-base sm:text-lg md:text-xl">
              <Buttons
                text="Start Free Trial"
                showArrow={true}
                className="bg-[#030213] text-white hover:bg-gray-800"
              />
              <Buttons
                text="Watch Demo"
                className="text-gray-700 border border-gray-200 hover:bg-gray-100"
              />
            </div>

            <TrustBadge />
          </div>

          <div className="relative mt-10 md:mt-0">
            <ImageHero />
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-2xl opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

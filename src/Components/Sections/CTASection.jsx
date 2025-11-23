import Buttons from "../CommonComponents/Buttons";
import DecorativeBlobs from "../CTAItems/DecorativeBlobs";

export default function CTASection() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#155DFC] to-[#9810FA]">
        <DecorativeBlobs />

        <div className="relative z-10 text-center py-16 px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Ready to get started?
          </h2>

          <p className="text-white/90 text-xl pb-4 max-w-2xl mx-auto">
            Join thousands of teams building with precision and attention to detail
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Buttons
              text="Start Free Trial"
              showArrow={true}
              className="bg-white text-gray-900 hover:bg-gray-100"
            />

            <Buttons
              text="Schedule Demo"
              className="bg-transparent text-white border-2 border-white/50 hover:bg-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

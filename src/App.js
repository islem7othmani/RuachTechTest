import CTASection from "./Components/Sections/CTASection";
import FeaturesSection from "./Components/Sections/Features";
import Footer from "./Components/Sections/Footer";
import Header from "./Components/Sections/Header";
import HeroSection from "./Components/Sections/HeroSection";
import PricingSection from "./Components/Sections/Pricing";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection/>
      <FeaturesSection/>
      <PricingSection/>
      <CTASection/>
      <Footer/>
    </div>
  );
}

export default App;

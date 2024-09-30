import FQA from "../components/Faq";
import Features from "../components/Features";
import Features2 from "../components/FeaturesTwo";
import FilteredCourses from "../components/Featuressection";
import Footer from "../components/Footer";
import HeroSection from "../components/Herosection";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Truste from "../components/Trustedby";
import UserSection from "../components/UserSection";

export default function Home() {
  return (
    <div className="grid gap-10">
      <HeroSection />
      <Truste />
      <FilteredCourses />
      <UserSection />
      <Features />
      <Features2 />
      <Pricing />
      <Testimonials />
      <FQA />
      <Footer />
    </div>
  )
}
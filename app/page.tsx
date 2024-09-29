import FilteredCourses from "../components/Featuressection";
import HeroSection from "../components/Herosection";
import Truste from "../components/Trustedby";
import UserSection from "../components/UserSection";

export default function Home() {
  return (
    <div className="grid gap-10">
      <HeroSection />
      <Truste />
      <FilteredCourses />
      <UserSection />
    </div>
  )
}
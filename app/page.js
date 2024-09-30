import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import End from "./components/End";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <End />
    </div>
  );
}

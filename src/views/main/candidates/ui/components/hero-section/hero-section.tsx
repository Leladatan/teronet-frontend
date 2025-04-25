import HeroMain from "@/views/main/candidates/ui/components/hero-section/components/hero-main";
import HeroAnimation from "@/views/main/candidates/ui/components/hero-section/components/hero-animation";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
      <HeroMain />
      <HeroAnimation />
    </div>
  );
};

export default HeroSection;

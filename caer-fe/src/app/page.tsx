import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import BlockchainsSection from "@/components/sections/blockchains-section";
import AssetsSection from "@/components/sections/assets-section";
import SplashCursor from "@/components/ui/SplashCursor";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <SplashCursor />
      <div className="relative">
        <HeroSection />
        <BackgroundBeams className="absolute inset-0 z-0" />
      </div>
      <div className="relative overflow-hidden">
        <FeaturesSection />
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <SparklesCore
            id="tsparticlesfull"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#141beb"
          />
        </div>
      </div>
      <HowItWorksSection />
      <BlockchainsSection />
      <AssetsSection />
    </div>
  );
}

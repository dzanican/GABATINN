import React from "react";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TrustSection from "@/components/sections/TrustSection";

interface HomePageProps {
  navbarProps?: React.ComponentProps<typeof Navbar>;
  heroProps?: React.ComponentProps<typeof HeroSection>;
  benefitsProps?: React.ComponentProps<typeof BenefitsSection>;
  trustProps?: React.ComponentProps<typeof TrustSection>;
}

const HomePage = ({
  navbarProps,
  heroProps,
  benefitsProps,
  trustProps,
}: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar {...navbarProps} />
      <main className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <HeroSection {...heroProps} />
        <BenefitsSection {...benefitsProps} />
        <TrustSection {...trustProps} />
      </main>
    </div>
  );
};

export default HomePage;

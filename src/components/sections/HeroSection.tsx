import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageUrl?: string;
}

const HeroSection = ({
  title = "Transform Your Health Naturally",
  subtitle = "Premium supplements backed by science for optimal wellness and vitality",
  ctaText = "Shop Now",
  onCtaClick = () => console.log("CTA clicked"),
  imageUrl = "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[600px] bg-gradient-to-r from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
          <div className="z-10 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
              {subtitle}
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <img
                src={imageUrl}
                alt="Supplement Product"
                className="w-[400px] h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-green-200 rounded-full filter blur-3xl opacity-20" />
    </section>
  );
};

export default HeroSection;

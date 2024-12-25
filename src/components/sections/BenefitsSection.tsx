import React from "react";
import BenefitCard from "@/components/cards/BenefitCard";
import { Brain, Heart, Shield, Zap } from "lucide-react";

interface BenefitsSectionProps {
  benefits?: Array<{
    icon: typeof Brain | typeof Heart | typeof Shield | typeof Zap;
    title: string;
    description: string;
  }>;
}

const BenefitsSection = ({
  benefits = [
    {
      icon: Brain,
      title: "Cognitive Enhancement",
      description:
        "Improve focus, memory, and mental clarity with our nootropic blend.",
    },
    {
      icon: Heart,
      title: "Heart Health",
      description:
        "Support cardiovascular function with essential nutrients and antioxidants.",
    },
    {
      icon: Shield,
      title: "Immune Support",
      description:
        "Strengthen your body's natural defenses with our immune-boosting formula.",
    },
    {
      icon: Zap,
      title: "Energy Boost",
      description: "Natural, sustained energy without the crash or jitters.",
    },
  ],
}: BenefitsSectionProps) => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Supplements?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the advantages that make our supplements stand out from the
            rest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

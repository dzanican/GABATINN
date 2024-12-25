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
      title: "Promotes Relaxation",
      description: "Helps calm the nervous system and reduce stress.",
    },
    {
      icon: Heart,
      title: "Supports Auditory Function",
      description:
        "Support cardiovascular function with essential nutrients and antioxidants.",
    },
    {
      icon: Shield,
      title: "Reduces Ear-Related Stress",
      description:
        "Helps alleviate stress that can contribute to tinnitus symptoms.",
    },
    {
      icon: Zap,
      title: "Supports Nervous System Health",
      description: "Plays a role in maintaining balanced neural activity.",
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

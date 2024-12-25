import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface BenefitCardProps {
  icon?: typeof Sparkles;
  title?: string;
  description?: string;
}

const BenefitCard = ({
  icon: Icon = Sparkles,
  title = "Enhanced Performance",
  description = "Boost your daily performance with our scientifically formulated supplements.",
}: BenefitCardProps) => {
  return (
    <Card className="w-[300px] h-[250px] bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex items-center justify-center pt-6">
        <div className="p-3 rounded-full bg-blue-100">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;

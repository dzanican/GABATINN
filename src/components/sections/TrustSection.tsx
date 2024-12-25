import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Star } from "lucide-react";

interface TrustSectionProps {
  reviews?: Array<{
    name: string;
    rating: number;
    comment: string;
    avatar: string;
  }>;
  badges?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

const TrustSection = ({
  reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing results! I feel more energetic than ever.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      name: "Mike Peters",
      rating: 5,
      comment: "Best supplement I've ever tried. Highly recommended!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    },
    {
      name: "Emily Chen",
      rating: 5,
      comment: "Great quality and excellent customer service.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
  ],
  badges = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "FDA Compliant",
      description: "Meets all FDA safety standards and regulations",
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "100% Satisfaction Guarantee",
      description:
        "30-day money-back guarantee if you're not completely satisfied",
    },
    {
      icon: <Star className="w-8 h-8 text-green-600" />,
      title: "Quality Tested",
      description: "Third-party tested for purity and potency",
    },
  ],
}: TrustSectionProps) => {
  return (
    <section className="w-full min-h-[800px] bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Choose Our Supplements?
        </h2>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {badges.map((badge, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{badge.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {badge.title}
                </h3>
                <p className="text-gray-600">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {review.name}
                      </h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

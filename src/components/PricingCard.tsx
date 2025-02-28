
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  delay = 0,
}: PricingCardProps) => {
  return (
    <div
      className={`fade-in-up rounded-xl overflow-hidden transition-all duration-300 ${
        isPopular
          ? "border-2 border-vpn-green shadow-lg scale-105 md:scale-110 lg:scale-105 z-10 bg-white"
          : "border border-gray-200 bg-white shadow-card"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {isPopular && (
        <div className="bg-vpn-green text-white text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6 sm:p-8">
        <h3 className="font-bold text-xl mb-2 text-vpn-blue">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-3xl sm:text-4xl font-bold text-vpn-blue">{price}</span>
          <span className="text-gray-500 ml-1">/month</span>
        </div>
        
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-vpn-green" />
              </div>
              <p className="ml-3 text-gray-600">{feature}</p>
            </div>
          ))}
        </div>
        
        <Button
          asChild
          className={`w-full ${
            isPopular
              ? "bg-vpn-green hover:bg-vpn-green/90 text-white"
              : "bg-vpn-blue hover:bg-vpn-blue/90 text-white"
          }`}
        >
          <a
            href="https://top.2discus.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;

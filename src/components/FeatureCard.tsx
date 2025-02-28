
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="bg-white p-6 sm:p-8 rounded-xl shadow-card card-hover fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-vpn-blue/10 rounded-full mb-5">
        <Icon className="h-6 w-6 text-vpn-blue" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-vpn-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;

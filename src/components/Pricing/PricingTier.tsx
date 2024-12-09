import { Check } from 'lucide-react';
import { PricingFeature } from './PricingFeature';

interface PricingTierProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PricingTier({ name, price, description, features, popular }: PricingTierProps) {
  return (
    <div className={`
      rounded-2xl p-8 
      ${popular 
        ? 'bg-[#C1FF72]/10 border-2 border-[#C1FF72]' 
        : 'bg-gray-900/50 border border-gray-800'
      }
    `}>
      {popular && (
        <span className="bg-[#C1FF72] text-black px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-gray-400">/project</span>
      </div>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature} />
        ))}
      </div>
      <button className={`
        w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-colors
        ${popular 
          ? 'bg-[#C1FF72] text-black hover:bg-[#9FE952]' 
          : 'bg-white/10 text-white hover:bg-white/20'
        }
      `}>
        Get Started
      </button>
    </div>
  );
}
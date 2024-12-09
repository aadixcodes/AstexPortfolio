import { Check } from 'lucide-react';

interface PricingFeatureProps {
  feature: string;
}

export function PricingFeature({ feature }: PricingFeatureProps) {
  return (
    <div className="flex items-center gap-3">
      <Check className="w-5 h-5 text-[#C1FF72]" />
      <span className="text-gray-300">{feature}</span>
    </div>
  );
}
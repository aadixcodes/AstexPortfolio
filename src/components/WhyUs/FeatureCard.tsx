import { CheckCircle2 } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-900/50">
      <CheckCircle2 className="w-6 h-6 text-[#C1FF72] flex-shrink-0" />
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-[#C1FF72] transition-colors group">
      <Icon className="w-12 h-12 text-[#C1FF72] mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
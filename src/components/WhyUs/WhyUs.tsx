import { CheckCircle2 } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function WhyUs() {
  const features = [
    {
      title: "Expert Team",
      description: "Our team consists of industry veterans with decades of combined experience."
    },
    {
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies to deliver modern solutions."
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered 100+ projects for clients worldwide."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your business runs smoothly."
    }
  ];

  return (
    <section id="why-us" className="bg-black py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Astex?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine technical expertise with creative innovation to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
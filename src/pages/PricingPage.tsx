import { PricingTier } from '../components/Pricing/PricingTier';
import { PricingFeature } from '../components/Pricing/PricingFeature';

export function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      price: 999,
      description: 'Perfect for small businesses and startups',
      features: [
        'Custom Website Design',
        'Responsive Development',
        'Basic SEO Setup',
        '3 Months Support',
      ]
    },
    {
      name: 'Professional',
      price: 2499,
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'E-commerce Integration',
        'Advanced SEO',
        'Priority Support',
        'Performance Optimization',
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 4999,
      description: 'For large-scale applications',
      features: [
        'Everything in Professional',
        'Custom Feature Development',
        'Dedicated Project Manager',
        '24/7 Support',
        'Cloud Infrastructure',
      ]
    }
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Transparent Pricing
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
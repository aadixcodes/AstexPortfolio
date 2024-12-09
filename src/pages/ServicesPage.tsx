import { Services } from '../components/Services/Services';
import { WhyUs } from '../components/WhyUs/WhyUs';

export function ServicesPage() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <Services />
      <WhyUs />
    </div>
  );
}
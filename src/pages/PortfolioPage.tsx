import { Portfolio } from '../components/Portfolio/Portfolio';
import { Testimonials } from '../components/Testimonials/Testimonials';

export function PortfolioPage() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <Portfolio />
      <Testimonials />
    </div>
  );
}
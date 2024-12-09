import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Services } from '../components/Services/Services';
import { WhyUs } from '../components/WhyUs/WhyUs';
import { Team } from '../components/Team/Team';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { Contact } from '../components/Contact/Contact';

export function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}
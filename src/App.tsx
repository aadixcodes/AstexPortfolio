import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <main className="bg-black min-h-screen">
      <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </main>
  );
}
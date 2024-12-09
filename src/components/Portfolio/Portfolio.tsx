import { PortfolioCard } from './PortfolioCard';

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "Financial Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "Healthcare App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=500"
    }
  ];

  return (
    <section id="portfolio" className="bg-black py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Our Portfolio</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Showcasing our best work and successful projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
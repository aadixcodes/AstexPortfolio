interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
}

export function PortfolioCard({ title, category, image }: PortfolioCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-[#C1FF72]">{category}</p>
      </div>
    </div>
  );
}
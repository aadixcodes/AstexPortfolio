interface NavLinkProps {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function NavLink({ active, onClick, children }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`
        text-sm md:text-base font-medium transition-colors
        ${active 
          ? 'text-[#C1FF72]' 
          : 'text-gray-300 hover:text-[#C1FF72]'
        }
      `}
    >
      {children}
    </button>
  );
}
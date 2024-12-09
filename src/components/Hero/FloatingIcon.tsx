import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingIconProps {
  Icon: LucideIcon;
  className?: string;
  delay?: number;
}

export function FloatingIcon({ Icon, className = '', delay = 0 }: FloatingIconProps) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const startAnimation = () => {
      let start: number;
      let animationFrameId: number;

      function animate(timestamp: number) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const movement = Math.sin(progress / 1000) * 20;
        setPosition(movement);
        animationFrameId = requestAnimationFrame(animate);
      }

      setTimeout(() => {
        animationFrameId = requestAnimationFrame(animate);
      }, delay * 1000);

      return () => cancelAnimationFrame(animationFrameId);
    };

    const cleanup = startAnimation();
    return cleanup;
  }, [delay]);

  return (
    <div
      className={`transform transition-transform ${className}`}
      style={{ transform: `translateY(${position}px)` }}
    >
      <Icon className="w-12 h-12 text-[#C1FF72]" />
    </div>
  );
}
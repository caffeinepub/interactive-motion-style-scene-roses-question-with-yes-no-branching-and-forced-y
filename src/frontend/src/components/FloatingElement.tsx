import { useEffect, useState } from 'react';

interface FloatingElementProps {
  src: string;
  delay?: number;
  duration?: number;
  size?: number;
  opacity?: number;
}

export default function FloatingElement({ 
  src, 
  delay = 0, 
  duration = 10,
  size = 64,
  opacity
}: FloatingElementProps) {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: -10,
  });

  useEffect(() => {
    const startX = Math.random() * 100;
    setPosition({ x: startX, y: -10 });
  }, []);

  // Check if this is a white floral element for special styling
  const isWhiteFloral = src.includes('white-tulips') || src.includes('white-lilies');
  
  // Use custom opacity if provided, otherwise use defaults
  const elementOpacity = opacity !== undefined ? opacity : (isWhiteFloral ? 0.9 : 0.6);

  return (
    <div
      className="absolute pointer-events-none animate-float-up"
      style={{
        left: `${position.x}%`,
        bottom: '-10%',
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: elementOpacity,
      }}
    >
      <img 
        src={src} 
        alt="" 
        className={`w-full h-full object-contain ${isWhiteFloral ? 'animate-sway-gentle animate-blossom-slow' : 'animate-sway'}`}
        style={{
          animationDelay: `${delay}s`,
        }}
        onError={(e) => {
          console.error('Failed to load image:', src);
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}

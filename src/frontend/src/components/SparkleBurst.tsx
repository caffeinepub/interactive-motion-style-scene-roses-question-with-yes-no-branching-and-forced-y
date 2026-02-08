interface SparkleBurstProps {
  x: number;
  y: number;
}

export default function SparkleBurst({ x, y }: SparkleBurstProps) {
  // Generate 8 sparkles in a radial burst pattern
  const sparkles = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 360) / 8;
    return {
      id: i,
      angle,
      delay: i * 0.05
    };
  });

  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {sparkles.map((sparkle) => (
        <img
          key={sparkle.id}
          src="/assets/generated/golden-sparkle-transparent.dim_32x32.png"
          alt=""
          className="absolute animate-sparkle-burst"
          style={{
            width: '32px',
            height: '32px',
            left: '0',
            top: '0',
            animationDelay: `${sparkle.delay}s`,
            '--sparkle-angle': `${sparkle.angle}deg`
          } as React.CSSProperties & { '--sparkle-angle': string }}
        />
      ))}
    </div>
  );
}

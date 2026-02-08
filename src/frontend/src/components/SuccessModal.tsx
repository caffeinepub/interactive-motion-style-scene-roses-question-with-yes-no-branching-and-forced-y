import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SuccessModal({ open, onOpenChange }: SuccessModalProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; duration: number; type: 'tulip' | 'lily' }>>([]);

  useEffect(() => {
    if (open) {
      // Generate confetti elements with white florals
      const newConfetti = Array.from({ length: 30 }, (_, i) => {
        const types: Array<'tulip' | 'lily'> = ['tulip', 'lily'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        
        return {
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
          duration: 2 + Math.random() * 2,
          type: randomType,
        };
      });
      setConfetti(newConfetti);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-valentine-primary border-2">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center text-valentine-primary flex items-center justify-center gap-2">
            🌷
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-valentine-dark pt-4">
            u are  right here's white tulips for you
          </DialogDescription>
        </DialogHeader>

        {/* Confetti animation with white florals */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {confetti.map((item) => (
            <div
              key={item.id}
              className="absolute animate-confetti"
              style={{
                left: `${item.left}%`,
                top: '-20px',
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`,
              }}
            >
              {item.type === 'tulip' ? (
                <img 
                  src="/assets/generated/white-tulips-transparent.dim_128x128.png" 
                  alt="" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <img 
                  src="/assets/generated/white-lilies-transparent.dim_128x128.png" 
                  alt="" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center pt-4 pb-2">
          <p className="text-valentine-dark/70 text-2xl">
            🌷🌷🌷
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

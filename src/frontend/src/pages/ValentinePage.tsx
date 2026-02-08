import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import FloatingElement from '@/components/FloatingElement';
import SuccessModal from '@/components/SuccessModal';
import Footer from '@/components/Footer';
import SparkleBurst from '@/components/SparkleBurst';

export default function ValentinePage() {
  const [showNoMessage, setShowNoMessage] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [showSparkleBurst, setShowSparkleBurst] = useState(false);
  const [sparkleBurstPosition, setSparkleBurstPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.onload = () => setBackgroundLoaded(true);
    img.onerror = () => {
      console.warn('Background image failed to load');
      setBackgroundLoaded(false);
    };
    img.src = '/assets/generated/valentine-background.dim_1920x1080.jpg';

    // Create audio context for background music
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    return () => {
      if (audioContext.state !== 'closed') {
        audioContext.close();
      }
    };
  }, []);

  const handleNoClick = () => {
    setShowNoMessage(true);
  };

  const handleYesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Trigger sparkle burst at button position
    const rect = event.currentTarget.getBoundingClientRect();
    setSparkleBurstPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
    setShowSparkleBurst(true);
    
    // Show success modal after brief delay for sparkle effect
    setTimeout(() => {
      setShowSuccess(true);
      setShowSparkleBurst(false);
    }, 600);
  };

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-valentine-light via-valentine-medium to-valentine-accent">
      {/* Background image overlay - only render if loaded */}
      {backgroundLoaded && (
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/assets/generated/valentine-background.dim_1920x1080.jpg)' }}
        />
      )}

      {/* Floating decorative elements layer - z-index 1 */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <FloatingElement 
          src="/assets/generated/rose-petals-transparent.dim_128x128.png" 
          delay={1} 
          duration={12}
          size={128}
        />
        <FloatingElement 
          src="/assets/generated/rose-petals-transparent.dim_128x128.png" 
          delay={3} 
          duration={11}
          size={128}
        />
        <FloatingElement 
          src="/assets/generated/golden-sparkle-transparent.dim_32x32.png" 
          delay={0.5} 
          duration={7}
          size={32}
        />
        <FloatingElement 
          src="/assets/generated/golden-sparkle-transparent.dim_32x32.png" 
          delay={2.5} 
          duration={8}
          size={32}
        />
        <FloatingElement 
          src="/assets/generated/golden-sparkle-transparent.dim_32x32.png" 
          delay={4.5} 
          duration={9}
          size={32}
        />
      </div>

      {/* White floral elements layer - z-index 2, higher opacity for visibility */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {/* White tulips with staggered timing and positions */}
        <FloatingElement 
          src="/assets/generated/white-tulips-transparent.dim_128x128.png" 
          delay={0} 
          duration={15}
          size={120}
          opacity={0.9}
        />
        <FloatingElement 
          src="/assets/generated/white-tulips-transparent.dim_128x128.png" 
          delay={2.5} 
          duration={17}
          size={110}
          opacity={0.85}
        />
        <FloatingElement 
          src="/assets/generated/white-tulips-transparent.dim_128x128.png" 
          delay={5} 
          duration={16}
          size={130}
          opacity={0.9}
        />
        <FloatingElement 
          src="/assets/generated/white-tulips-transparent.dim_128x128.png" 
          delay={7.5} 
          duration={18}
          size={115}
          opacity={0.88}
        />
        <FloatingElement 
          src="/assets/generated/white-tulips-transparent.dim_128x128.png" 
          delay={10} 
          duration={16}
          size={125}
          opacity={0.92}
        />
        <FloatingElement 
          src="/assets/generated/white-tulips-transparent.dim_128x128.png" 
          delay={12.5} 
          duration={17}
          size={105}
          opacity={0.87}
        />
        
        {/* White lilies with staggered timing and positions */}
        <FloatingElement 
          src="/assets/generated/white-lilies-transparent.dim_128x128.png" 
          delay={1.5} 
          duration={16}
          size={115}
          opacity={0.9}
        />
        <FloatingElement 
          src="/assets/generated/white-lilies-transparent.dim_128x128.png" 
          delay={4} 
          duration={18}
          size={125}
          opacity={0.88}
        />
        <FloatingElement 
          src="/assets/generated/white-lilies-transparent.dim_128x128.png" 
          delay={6.5} 
          duration={17}
          size={110}
          opacity={0.9}
        />
        <FloatingElement 
          src="/assets/generated/white-lilies-transparent.dim_128x128.png" 
          delay={9} 
          duration={16}
          size={120}
          opacity={0.85}
        />
        <FloatingElement 
          src="/assets/generated/white-lilies-transparent.dim_128x128.png" 
          delay={11.5} 
          duration={18}
          size={130}
          opacity={0.92}
        />
        <FloatingElement 
          src="/assets/generated/white-lilies-transparent.dim_128x128.png" 
          delay={14} 
          duration={17}
          size={108}
          opacity={0.87}
        />
      </div>

      {/* Sparkle burst overlay */}
      {showSparkleBurst && (
        <SparkleBurst x={sparkleBurstPosition.x} y={sparkleBurstPosition.y} />
      )}

      {/* Music control */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
        aria-label="Toggle music"
      >
        {isMusicPlaying ? (
          <Volume2 className="w-6 h-6 text-valentine-primary" />
        ) : (
          <VolumeX className="w-6 h-6 text-valentine-primary" />
        )}
      </button>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          {/* Main question */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-valentine-dark tracking-tight animate-fade-in">
            do u really think roses are boring
          </h1>

          {/* Buttons container */}
          <div className="flex flex-col items-center gap-6 mt-12">
            {!showNoMessage ? (
              <div className="flex gap-6">
                <Button
                  onClick={handleYesClick}
                  size="lg"
                  className="bg-valentine-primary hover:bg-valentine-primary-dark text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-xl px-12 py-6 hover:animate-bounce-gentle"
                >
                  Yes
                </Button>
                <Button
                  onClick={handleNoClick}
                  variant="outline"
                  size="lg"
                  className="bg-white/90 hover:bg-white border-2 border-valentine-primary text-valentine-primary font-bold shadow-lg transition-all duration-300 text-xl px-12 py-6 hover:animate-wiggle focus:animate-wiggle"
                >
                  No
                </Button>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in">
                <p className="text-2xl md:text-3xl text-valentine-dark font-semibold">
                  please click yes don't waste my labour
                </p>
                <Button
                  onClick={handleYesClick}
                  size="lg"
                  className="bg-valentine-primary hover:bg-valentine-primary-dark text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-xl px-12 py-6 hover:animate-bounce-gentle"
                >
                  Yes
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Success modal */}
      <SuccessModal open={showSuccess} onOpenChange={setShowSuccess} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-6 text-center">
      <p className="text-sm text-valentine-dark/60 flex items-center justify-center gap-2">
        © 2025. Built with{' '}
        <Heart className="w-4 h-4 text-valentine-primary fill-valentine-primary inline animate-pulse-slow" />
        {' '}using{' '}
        <a 
          href="https://caffeine.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-valentine-primary hover:text-valentine-primary-dark font-medium transition-colors underline decoration-dotted"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const quotes = [
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "Every day may not be good, but there is something good in every day.",
  "You are enough, just as you are. Each emotion you feel, everything in your life, everything you do or do not do... where you are and who you are right now is enough.",
  "Your present circumstances don't determine where you can go; they merely determine where you start.",
  "The darkest nights produce the brightest stars.",
  "You've survived 100% of your worst days. You're doing great.",
  "Be gentle with yourself. You're doing the best you can.",
];

export default function QuoteSection() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <Sparkles className="w-6 h-6 text-amber-500" />
      </div>

      <blockquote
        className={`text-xl md:text-2xl text-gray-700 text-center font-medium leading-relaxed transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        "{quotes[currentQuote]}"
      </blockquote>

      <div className="flex justify-center gap-2 mt-8">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setCurrentQuote(index);
                setFade(true);
              }, 300);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentQuote ? 'bg-amber-500 w-8' : 'bg-amber-300'
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

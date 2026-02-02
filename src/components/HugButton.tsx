import { useState } from 'react';
import { Heart } from 'lucide-react';

type AnimationType = 'wiggle' | 'spin-bounce' | 'flip' | 'shake';

export default function HugButton() {
  const [hugs, setHugs] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType | null>(null);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const animations: AnimationType[] = ['wiggle', 'spin-bounce', 'flip', 'shake'];

  const handleHug = () => {
    setHugs(hugs + 1);
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    setCurrentAnimation(randomAnimation);

    const newHearts = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 300 - 150,
      y: Math.random() * 300 - 150,
    }));

    setHearts([...hearts, ...newHearts]);

    setTimeout(() => setCurrentAnimation(null), 600);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
    }, 1200);
  };

  return (
    <div className="text-center py-12 relative">
      <div className="mb-6">
        <p className="text-2xl font-semibold text-gray-700 mb-2">Need a hug?</p>
        <p className="text-gray-500">Click the button below for some love</p>
      </div>

      <div className="relative inline-block">
        {hearts.map((heart) => (
          <Heart
            key={heart.id}
            className="absolute top-1/2 left-1/2 w-6 h-6 text-rose-400 animate-float-away pointer-events-none"
            fill="currentColor"
            style={{
              transform: `translate(${heart.x}px, ${heart.y}px)`,
            }}
          />
        ))}

        <button
          onClick={handleHug}
          className={`relative bg-gradient-to-r from-rose-400 to-pink-400 text-white px-12 py-6 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
            currentAnimation ? `animate-${currentAnimation} animate-pulse-glow` : ''
          }`}
        >
          <span className="text-4xl mb-2 block">🤗</span>
          Virtual Hug
        </button>
      </div>

      {hugs > 0 && (
        <div className="mt-6 animate-fade-in">
          <p className="text-lg text-gray-600">
            You've received <span className="font-bold text-rose-500">{hugs}</span> warm hug{hugs > 1 ? 's' : ''}! 💕
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {hugs % 5 === 0 && hugs > 0 ? "You're a hug champion! 🏆" : ''}
          </p>
        </div>
      )}
    </div>
  );
}

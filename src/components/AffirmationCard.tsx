import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface AffirmationCardProps {
  message: string;
  gradient: string;
  delay: number;
}

export default function AffirmationCard({ message, gradient, delay }: AffirmationCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group perspective cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`relative w-full h-48 transition-all duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className={`absolute inset-0 backface-hidden rounded-2xl ${gradient} p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="text-center">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-3 animate-pulse" />
            <p className="text-white font-semibold">Click to reveal</p>
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-white p-6 flex items-center justify-center shadow-lg border-2 border-rose-200">
          <p className="text-gray-700 text-lg font-medium text-center leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

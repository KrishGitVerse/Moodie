import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="text-center py-8 px-4">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Heart className="w-8 h-8 text-rose-400 animate-pulse" fill="currentColor" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
          You Are Amazing
        </h1>
        <Heart className="w-8 h-8 text-rose-400 animate-pulse" fill="currentColor" />
      </div>
      <p className="text-gray-600 text-lg">A little reminder of how special you are</p>
    </header>
  );
}

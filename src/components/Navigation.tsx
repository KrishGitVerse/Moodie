import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Home, Image, Film, Wind, Smile } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/affirmations', label: 'Shayari', icon: Heart },
    { path: '/photos', label: 'Yaadein', icon: Image },
    // { path: '/reels', label: 'Reels', icon: Film },
    { path: '/breathing', label: 'Breathing', icon: Wind },
    { path: '/moods', label: 'Moods', icon: Smile }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 p-2 rounded-lg bg-white/80 backdrop-blur hover:bg-white transition-colors shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 shadow-xl transform transition-transform duration-300 z-30 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600 mb-8">
            You Are Amazing
          </h1>

          <div className="space-y-2">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === path
                    ? 'bg-gradient-to-r from-pink-400 to-orange-400 text-white shadow-lg scale-105'
                    : 'text-gray-700 hover:bg-white/50 hover:shadow-md'
                }`}
              >
                <Icon size={20} />
                <span className="font-semibold">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="hidden md:block fixed left-0 top-0 h-screen w-64 bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 shadow-xl z-30">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600 mb-8">
            You are Amazingly Cutieee 🌻
          </h1>

          <div className="space-y-2">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === path
                    ? 'bg-gradient-to-r from-pink-400 to-orange-400 text-white shadow-lg scale-105'
                    : 'text-gray-700 hover:bg-white/50 hover:shadow-md'
                }`}
              >
                <Icon size={20} />
                <span className="font-semibold">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

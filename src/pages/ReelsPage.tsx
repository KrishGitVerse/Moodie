import { useState } from 'react';
import { ChevronLeft, ChevronRight, List, X } from 'lucide-react';
import InstagramReels from '../components/InstagramReels';

export default function ReelsPage() {
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentReel, setCurrentReel] = useState(0);

  const reels = [
    {
      id: 1,
      url: 'https://www.instagram.com/p/C58toV_iDYS/?hl=en',
      title: 'Reel 1'
    },
    {
      id: 2,
      url: 'https://www.instagram.com/reels/DBJzDqKyKqR/',
      title: 'Reel 2'
    },
    {
      id: 3,
      url: 'https://www.instagram.com/reels/DBIpH8kyN9r/',
      title: 'Reel 3'
    },
    {
      id: 4,
      url: 'https://www.instagram.com/reels/DBGlKqKyJmQ/',
      title: 'Reel 4'
    },
    {
      id: 5,
      url: 'https://www.instagram.com/reels/DBEzVqKyIpL/',
      title: 'Reel 5'
    }
  ];

  const handlePrevious = () => {
    setCurrentReel((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReel((prev) => (prev === reels.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Watch & Smile
      </h1>

      <div className="flex gap-4">
        <div className="flex-1">
          <InstagramReels url={reels[currentReel].url} />

          <div className="flex items-center justify-between mt-8 gap-4">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="text-center flex-1">
              <p className="text-gray-700 font-semibold">
                Reel {currentReel + 1} of {reels.length}
              </p>
              <div className="flex gap-1 mt-2 justify-center flex-wrap">
                {reels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReel(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentReel
                        ? 'bg-gradient-to-r from-pink-400 to-orange-400 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowPlaylist(!showPlaylist)}
          className="hidden lg:block p-3 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
        >
          <List size={24} />
        </button>
      </div>

      {showPlaylist && (
        <div className="hidden lg:block fixed right-4 top-20 w-80 bg-white rounded-2xl shadow-2xl p-6 border-2 border-pink-200 animate-fade-in max-h-96 overflow-y-auto z-40">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Playlist</h3>
            <button
              onClick={() => setShowPlaylist(false)}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-2">
            {reels.map((reel, index) => (
              <button
                key={reel.id}
                onClick={() => {
                  setCurrentReel(index);
                  setShowPlaylist(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  index === currentReel
                    ? 'bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold scale-105'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <p className="font-semibold">{reel.title}</p>
                <p className="text-xs opacity-75">Reel {index + 1}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setShowPlaylist(!showPlaylist)}
        className="lg:hidden mt-6 w-full p-3 rounded-lg bg-gradient-to-r from-pink-400 to-orange-400 text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
      >
        <List size={20} />
        Playlist
      </button>

      {showPlaylist && (
        <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-lg p-6 border-2 border-pink-200">
          <div className="space-y-2">
            {reels.map((reel, index) => (
              <button
                key={reel.id}
                onClick={() => {
                  setCurrentReel(index);
                  setShowPlaylist(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  index === currentReel
                    ? 'bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold scale-105'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <p className="font-semibold">{reel.title}</p>
                <p className="text-xs opacity-75">Reel {index + 1}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { moods } from '../data/moods';

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {moods.map((mood, index) => (
          <button
            key={mood.id}
            onClick={() => setSelectedMood(mood.id)}
            className="group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className={`bg-gradient-to-br ${mood.bgGradient} rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:scale-105 cursor-pointer border-2 border-white/50 hover:border-white relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white to-transparent transition-opacity duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-125">
                  {mood.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {mood.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {mood.description}
                </p>

                <div className="h-1 w-12 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto rounded-full mb-3"></div>

                <p className="text-xs text-gray-700 italic">
                  {mood.message}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="mt-8 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-l-4 border-r-4 border-b-4 border-pink-300">
            <div className="text-7xl mb-4 animate-bounce">
              🐼
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {moods.find(m => m.id === selectedMood)?.name} Mood Confirmed!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {moods.find(m => m.id === selectedMood)?.message}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <span className="text-2xl">🐼</span>
              <span className="text-2xl">💕</span>
              <span className="text-2xl">✨</span>
              <span className="text-2xl">🌟</span>
              <span className="text-2xl">💫</span>
            </div>
            <button
              onClick={() => setSelectedMood(null)}
              className="mt-6 px-8 py-2 bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Select Another Mood
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

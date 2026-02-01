import { useState, useEffect } from 'react';

export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(4);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev > 1) return prev - 1;

        if (phase === 'inhale') {
          setPhase('hold');
          return 4;
        } else if (phase === 'hold') {
          setPhase('exhale');
          return 6;
        } else {
          setPhase('inhale');
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const getMessage = () => {
    if (phase === 'inhale') return 'Breathe In';
    if (phase === 'hold') return 'Hold';
    return 'Breathe Out';
  };

  const getScale = () => {
    if (phase === 'inhale') return 'scale-150';
    if (phase === 'hold') return 'scale-150';
    return 'scale-100';
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Breathing Exercise
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Take a moment to relax and breathe
      </p>

      <div className="flex flex-col items-center gap-8">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <div
            className={`absolute w-32 h-32 rounded-full bg-gradient-to-br from-teal-300 to-blue-300 transition-all duration-${
              phase === 'inhale' ? '4000' : phase === 'hold' ? '4000' : '6000'
            } ease-in-out ${isActive ? getScale() : 'scale-100'}`}
          />
          {isActive && (
            <div className="absolute text-center z-10">
              <p className="text-2xl font-bold text-gray-700">{getMessage()}</p>
              <p className="text-4xl font-bold text-teal-600 mt-2">{count}</p>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            setIsActive(!isActive);
            if (!isActive) {
              setPhase('inhale');
              setCount(4);
            }
          }}
          className="bg-gradient-to-r from-teal-400 to-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          {isActive ? 'Stop' : 'Start Exercise'}
        </button>
      </div>
    </div>
  );
}

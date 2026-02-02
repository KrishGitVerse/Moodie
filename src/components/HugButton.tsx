// import { useState } from 'react';
// import { Heart } from 'lucide-react';

// type AnimationType = 'wiggle' | 'spin-bounce' | 'flip' | 'shake';

// export default function HugButton() {
//   const [hugs, setHugs] = useState(0);
//   const [currentAnimation, setCurrentAnimation] = useState<AnimationType | null>(null);
//   const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

//   const animations: AnimationType[] = ['wiggle', 'spin-bounce', 'flip', 'shake'];

//   const handleHug = () => {
//     setHugs(hugs + 1);
//     const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
//     setCurrentAnimation(randomAnimation);

//     const newHearts = Array.from({ length: 12 }, (_, i) => ({
//       id: Date.now() + i,
//       x: Math.random() * 300 - 150,
//       y: Math.random() * 300 - 150,
//     }));

//     setHearts([...hearts, ...newHearts]);

//     setTimeout(() => setCurrentAnimation(null), 600);
//     setTimeout(() => {
//       setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
//     }, 1200);
//   };

//   return (
//     <div className="text-center py-12 relative">
//       <div className="mb-6">
//         <p className="text-2xl font-semibold text-gray-700 mb-2">Need a hug?</p>
//         <p className="text-gray-500">Click the button below for some love</p>
//       </div>

//       <div className="relative inline-block">
//         {hearts.map((heart) => (
//           <Heart
//             key={heart.id}
//             className="absolute top-1/2 left-1/2 w-6 h-6 text-rose-400 animate-float-away pointer-events-none"
//             fill="currentColor"
//             style={{
//               transform: `translate(${heart.x}px, ${heart.y}px)`,
//             }}
//           />
//         ))}

//         <button
//           onClick={handleHug}
//           className={`relative bg-gradient-to-r from-rose-400 to-pink-400 text-white px-12 py-6 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
//             currentAnimation ? `animate-${currentAnimation} animate-pulse-glow` : ''
//           }`}
//         >
//           <span className="text-4xl mb-2 block">🤗</span>
//           Virtual Hug
//         </button>
//       </div>

//       {hugs > 0 && (
//         <div className="mt-6 animate-fade-in">
//           <p className="text-lg text-gray-600">
//             You've received <span className="font-bold text-rose-500">{hugs}</span> warm hug{hugs > 1 ? 's' : ''}! 💕
//           </p>
//           <p className="text-sm text-gray-500 mt-2">
//             {hugs % 5 === 0 && hugs > 0 ? "You're a hug champion! 🏆" : ''}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HugState = "idle" | "sending" | "sent";

export default function HugButton() {
  const [state, setState] = useState<HugState>("idle");

  const sendHug = () => {
    if (state !== "idle") return;

    setState("sending");
    setTimeout(() => {
      setState("sent");
    }, 2200);
  };

  return (
    <div className="text-center py-12">
      <AnimatePresence mode="wait">
        {/* IDLE */}
        {state === "idle" && (
          <motion.button
            key="idle"
            whileTap={{ scale: 0.95 }}
            onClick={sendHug}
            className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition"
          >
            <span className="block text-3xl mb-1">🤗</span>
            Send a Hug
          </motion.button>
        )}

        {/* SENDING */}
        {state === "sending" && (
          <motion.div
            key="sending"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white/80 backdrop-blur rounded-2xl shadow p-6 w-72 mx-auto"
          >
            <p className="text-gray-700 mb-3 text-lg">
              sending virtual hug
            </p>

            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="text-4xl mb-4"
            >
              🤍
            </motion.div>

            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <motion.div
                className="h-full bg-purple-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
              />
            </div>
          </motion.div>
        )}

        {/* SENT */}
        {state === "sent" && (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="text-5xl mb-3">🫂</div>
            <p className="text-lg text-gray-700">
              A warm hug just for you.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              You will be feeling good now.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

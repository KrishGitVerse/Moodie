import Header from './components/Header';
import AffirmationCard from './components/AffirmationCard';
import HugButton from './components/HugButton';
import QuoteSection from './components/QuoteSection';
import BreathingExercise from './components/BreathingExercise';
import PhotoGallery from './components/PhotoGallery';
import MoodSelector from './components/MoodSelector';
import { affirmations } from './data/affirmations';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header />

        <div className="mb-12">
          <QuoteSection />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Positive Affirmations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affirmations.map((affirmation, index) => (
              <AffirmationCard
                key={index}
                message={affirmation.message}
                gradient={affirmation.gradient}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Feel-Good Photos
          </h2>
          <PhotoGallery />
        </div>

        <div className="mb-12">
          <BreathingExercise />
        </div>

        <HugButton />

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            How Are You Feeling Today?
          </h2>
          <MoodSelector />
        </div>

        <footer className="text-center py-8 text-gray-500">
          <p className="text-sm">Made with love for you 💖</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

import AffirmationCard from '../components/AffirmationCard';
import { affirmations } from '../data/affirmations';

export default function AffirmationsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        शायराना शायरी
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
  );
}

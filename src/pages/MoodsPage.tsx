import MoodSelector from '../components/MoodSelector';

export default function MoodsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        How Are You Feeling Today?
      </h1>
      <MoodSelector />
    </div>
  );
}

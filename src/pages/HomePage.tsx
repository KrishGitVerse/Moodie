import Header from '../components/Header';
import QuoteSection from '../components/QuoteSection';
import HugButton from '../components/HugButton';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Header />
      <QuoteSection />
      <HugButton />
    </div>
  );
}

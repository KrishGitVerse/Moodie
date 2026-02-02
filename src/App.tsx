import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AffirmationsPage from './pages/AffirmationsPage';
import PhotosPage from './pages/PhotosPage';
import ReelsPage from './pages/ReelsPage';
import BreathingPage from './pages/BreathingPage';
import MoodsPage from './pages/MoodsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
        <Navigation />
        <div className="md:ml-64 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/affirmations" element={<AffirmationsPage />} />
              <Route path="/photos" element={<PhotosPage />} />
              {/* <Route path="/reels" element={<ReelsPage />} /> */}
              <Route path="/breathing" element={<BreathingPage />} />
              <Route path="/moods" element={<MoodsPage />} />
            </Routes>
            <footer className="text-center py-8 text-gray-500 mt-12">
              <p className="text-sm">Made by Dumbo for you 💖</p>
            </footer>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

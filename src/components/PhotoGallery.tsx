import { useState } from 'react';
import { X } from 'lucide-react';
import { photos } from '../data/photos';

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => setSelectedPhoto(index)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-semibold text-lg">{photo.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="relative max-w-2xl w-full animate-scale-in">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={photos[selectedPhoto].url}
                alt={photos[selectedPhoto].alt}
                className="w-full h-auto max-h-[70vh] object-cover"
              />
              <div className="p-6 bg-gradient-to-r from-pink-50 to-orange-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {photos[selectedPhoto].title}
                </h3>
                <p className="text-gray-600">{photos[selectedPhoto].alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

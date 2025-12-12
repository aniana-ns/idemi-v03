
import React from 'react';
import SEO from '../components/SEO';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const IMAGES = [
    { src: "https://images.unsplash.com/photo-1581093458791-9f30398bfda6?auto=format&fit=crop&q=80", caption: 'Calibration Lab' },
    { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80", caption: 'Testing Facility' },
    { src: "https://images.unsplash.com/photo-1565514020176-7822bd9b5311?auto=format&fit=crop&q=80", caption: 'CNC Machine Shop' },
    { src: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80", caption: '3D Printing Lab' },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80", caption: 'Training Classroom' },
    { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80", caption: 'Student Workshop' },
];

const GalleryMain: React.FC = () => {
  useScrollAnimation();

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'Photo Gallery | IDEMI', description: 'Glimpses of IDEMI Mumbai facilities.' }} path="/gallery" />
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Photo Gallery</h1>
          <p className="text-blue-100">Glimpses of our facilities and events.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer bg-gray-200 dark:bg-gray-800 h-64 reveal-on-scroll">
                    <img 
                        src={img.src} 
                        alt={img.caption} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                        loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                        <p className="text-white font-medium text-sm">{img.caption}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryMain;

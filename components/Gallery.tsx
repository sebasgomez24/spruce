import React from 'react';
import Image from 'next/image';
import galleryImages from '../public/images/gallery/galleryImages.json';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-900">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((filename: string, idx: number) => (
            <div key={idx} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={`/images/gallery/${filename}`}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 
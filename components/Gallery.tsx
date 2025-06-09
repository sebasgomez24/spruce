import React, { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import galleryImages from '../public/images/gallery/galleryImages.json';

const Gallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowLeft') setSelectedIdx(idx => (idx !== null && idx > 0 ? idx - 1 : idx));
      if (e.key === 'ArrowRight') setSelectedIdx(idx => (idx !== null && idx < galleryImages.length - 1 ? idx + 1 : idx));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  // Trap focus in modal
  useEffect(() => {
    if (selectedIdx === null) return;
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>('button, [tabindex]:not([tabindex="-1"])');
    focusable?.[0]?.focus();
  }, [selectedIdx]);

  const openModal = useCallback((idx: number) => setSelectedIdx(idx), []);
  const closeModal = useCallback(() => setSelectedIdx(null), []);
  const goLeft = useCallback(() => setSelectedIdx(idx => (idx !== null && idx > 0 ? idx - 1 : idx)), []);
  const goRight = useCallback(() => setSelectedIdx(idx => (idx !== null && idx < galleryImages.length - 1 ? idx + 1 : idx)), []);

  return (
    <section id="gallery" className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-900">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((filename: string, idx: number) => (
            <div key={idx} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => openModal(idx)}>
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
      {/* Modal */}
      {selectedIdx !== null && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80 transition-opacity"
          aria-modal="true"
          role="dialog"
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-8 text-white text-3xl font-bold focus:outline-none"
            aria-label="Close gallery modal"
            tabIndex={0}
          >
            &times;
          </button>
          <div className="flex items-center justify-center w-full max-w-6xl h-[80vh] relative">
            <button
              onClick={goLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-2 text-2xl focus:outline-none"
              aria-label="Previous image"
              disabled={selectedIdx === 0}
              tabIndex={0}
            >
              &#8592;
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={`/images/gallery/${galleryImages[selectedIdx]}`}
                alt={`Gallery image ${selectedIdx + 1}`}
                fill
                className="object-contain rounded-lg shadow-2xl"
                sizes="80vw"
                priority
              />
            </div>
            <button
              onClick={goRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-2 text-2xl focus:outline-none"
              aria-label="Next image"
              disabled={selectedIdx === galleryImages.length - 1}
              tabIndex={0}
            >
              &#8594;
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 mt-8 overflow-x-auto max-w-2xl px-4">
            {galleryImages.map((filename: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`relative w-20 h-16 rounded border-2 ${selectedIdx === idx ? 'border-blue-500' : 'border-transparent'} overflow-hidden focus:outline-none`}
                aria-label={`View image ${idx + 1}`}
                tabIndex={0}
              >
                <Image
                  src={`/images/gallery/${filename}`}
                  alt={`Gallery thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 
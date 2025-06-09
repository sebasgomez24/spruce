import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/flyover.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero.jpg"
      >
        <source src="/images/flyover.mp4" type="video/mp4" />
        <Image
          src="/images/hero.jpg"
          alt="Property Hero"
          fill
          className="object-cover z-0"
          priority
        />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl md:text-7xl font-light mb-4 drop-shadow-lg">3480 Spruce Ave</h1>
        <div className="text-2xl md:text-3xl font-light mb-2 drop-shadow">South Lake Tahoe, California</div>
        <div className="text-3xl md:text-4xl font-bold mb-6 drop-shadow text-green-300">$4,500/mo</div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-lg font-light mb-8 drop-shadow">
          <span>4 Bed</span>
          <span>2 Bath</span>
          <span>Available: NOW</span>
        </div>
        <a href="#propertyinfo" className="mt-8 animate-bounce">
          <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 
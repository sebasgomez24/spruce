"use client";
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-30 flex items-center justify-between px-4 py-2 text-white drop-shadow-2xl transition-colors duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}
      style={{ minHeight: scrolled ? '2.5rem' : '3rem' }}
    >
      <div className="text-2xl font-semibold tracking-widest">SPRUCE</div>
      <ul className="hidden md:flex space-x-8 text-lg">
        <li><a href="#propertyinfo" className="hover:underline">Overview</a></li>
        <li><a href="#gallery" className="hover:underline">Gallery</a></li>
        <li><a href="#video" className="hover:underline">Video</a></li>
        <li><a href="#floorplan" className="hover:underline">Floorplan</a></li>
        <li><a href="#amenities" className="hover:underline">Amenities</a></li>
        <li><a href="#location" className="hover:underline">Location</a></li>
      </ul>
      <a href="#contact" className="border border-white rounded px-6 py-2 ml-4 hover:bg-white hover:text-black transition-colors duration-200 hidden md:inline-block">Contact us →</a>
    </nav>
  );
};

export default Navbar; 
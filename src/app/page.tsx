"use client";
import React from 'react';
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import PropertyInfo from "../../components/PropertyInfo";
import Gallery from "../../components/Gallery";
import Video, { VideoData } from "../../components/Video";
import Amenities from "../../components/Amenities";
import Location from "../../components/Location";
import ContactForm from "../../components/ContactForm";

const videos: VideoData[] = [
  {
    src: "/images/quickvid.mov",
    poster: "/images/hero.jpg",
    title: "Quick Video",
  },
  {
    src: "/images/flyover.mp4",
    poster: "/images/gallery/3.jpg",
    title: "Fly Over Video",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <PropertyInfo />
      <Gallery />
      <Video videos={videos} />
      <Amenities />
      <Location />
      <ContactForm />
      {/* TODO: Add Virtual Tour, Floorplan, Amenities, Video, Location, ContactForm sections here */}
    </div>
  );
}

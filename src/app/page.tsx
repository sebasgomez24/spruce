"use client";
import React from 'react';
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import PropertyInfo from "../../components/PropertyInfo";
import Gallery from "../../components/Gallery";
import Video from "../../components/Video";
import Amenities from "../../components/Amenities";
import Location from "../../components/Location";
import ContactForm from "../../components/ContactForm";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <PropertyInfo />
      <Gallery />
      <Video />
      <Amenities />
      <Location />
      <ContactForm />
      {/* TODO: Add Virtual Tour, Floorplan, Amenities, Video, Location, ContactForm sections here */}
    </div>
  );
}

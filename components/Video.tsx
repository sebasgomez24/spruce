import React from 'react';

const Video: React.FC = () => {
  return (
    <section id="video" className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-900">Video</h2>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
          <video
            src="/images/quickvid.mov"
            controls
            className="w-full h-full object-cover"
            poster="/images/hero.jpg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video; 
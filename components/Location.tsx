import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-900">Location</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=3480+Spruce+Ave,+South+Lake+Tahoe,+CA&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location; 
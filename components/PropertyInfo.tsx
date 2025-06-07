import React from 'react';
import { HomeIcon, PhoneIcon, UserIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const PropertyInfo: React.FC = () => {
  return (
    <section id="propertyinfo" className="w-full py-10 bg-white border-b">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">South Lake Tahoe</h2>
          <div className="text-lg text-gray-700 mb-2">3480 Spruce Ave, South Lake Tahoe, California</div>
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-2">
            <span className="flex items-center gap-1"><HomeIcon className="w-5 h-5" />4 Bedroom</span>
            <span className="flex items-center gap-1"><HomeIcon className="w-5 h-5" />2 Bath</span>
            <span className="flex items-center gap-1"><CheckCircleIcon className="w-5 h-5 text-green-500" />Available: <span className="ml-1 font-medium text-black">NOW</span></span>
          </div>
          <div className="text-sm text-gray-500 mb-1">Status: <span className="text-green-600 font-semibold">Active</span></div>
          <div className="text-sm text-gray-500">Posted by: <span className="font-medium text-gray-700">Javier Gomez Landazabal</span> <span className="inline-flex items-center ml-2"><PhoneIcon className="w-4 h-4 mr-1" />510-385-8094</span></div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Overview</h3>
          <p className="text-gray-700">
            Beautiful home close to everything with no back neighbors. This home also offers the opportunity to rent out the bottom and use the top for the owner due to the locking door at the top of the stairs. Walking distance to the lake. Only a 10 minute drive to Casinos or Heavenly Valley for skiing. Added bonus of a treehouse in the backyard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyInfo; 
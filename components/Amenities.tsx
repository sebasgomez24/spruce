import React from 'react';
import { HomeIcon, CheckCircleIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

const amenities = [
  {
    category: 'Unit Features',
    items: [
      { icon: <CheckCircleIcon className="w-6 h-6 text-blue-500" />, label: 'Dishwasher' },
      { icon: <CheckCircleIcon className="w-6 h-6 text-blue-500" />, label: 'Washer/Dryer' },
    ],
  },
  {
    category: 'Property Features',
    items: [
      { icon: <HomeIcon className="w-6 h-6 text-green-500" />, label: 'Deck/Patio' },
      { icon: <SparklesIcon className="w-6 h-6 text-green-500" />, label: 'Fireplace' },
    ],
  },
  {
    category: 'Pets Allowed',
    items: [
      { icon: <HeartIcon className="w-6 h-6 text-yellow-500" />, label: 'Cats' },
      { icon: <HeartIcon className="w-6 h-6 text-yellow-500" />, label: 'Small Dogs (Under 25 lbs)' },
    ],
  },
];

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-900">Amenities & Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {amenities.map((group, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-gray-700">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities; 
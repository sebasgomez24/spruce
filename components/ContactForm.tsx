"use client";
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-900">Contact Us</h2>
        {typeof window !== 'undefined' && window.location.search.includes('success=true') ? (
          <div className="text-green-600 text-center text-lg font-medium">Thank you for your message!</div>
        ) : (
          <form
            action="https://formspree.io/f/xldngpbz"
            method="POST"
            className="space-y-6 bg-white p-8 rounded-lg shadow-md"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
            <input type="hidden" name="_redirect" value="/contact?success=true" />
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm; 
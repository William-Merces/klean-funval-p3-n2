"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-16">Contact Us</h2>

        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left Section - Form */}
          <div className="relative">
            {/* Círculo decorativo atrás do botão */}
            <div className="absolute -bottom-10 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <input
                type="text"
                placeholder="Write your name"
                className="w-full p-3 bg-transparent focus:outline-none text-gray-600"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              
              <input
                type="email"
                placeholder="Write your email"
                className="w-full p-3 bg-transparent focus:outline-none text-gray-600"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              
              <textarea
                placeholder="Write your message"
                rows={8}
                className="w-full p-3 bg-transparent focus:outline-none text-gray-600 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#818CF8] to-[#6366f1] text-white rounded-full hover:opacity-90 transition-opacity mt-4"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="text-[#818CF8]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-500">Phone</h3>
                <p>+880124332334</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-[#818CF8]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-500">Email</h3>
                <p>something@email.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-[#818CF8]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-500">Location</h3>
                <p>43/A Spooner Street, St laurence, Virginia, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
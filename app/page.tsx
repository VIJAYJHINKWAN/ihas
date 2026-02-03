'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-4">
            <a href="tel:+918447753524" className="flex items-center gap-2 text-sm hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="hidden sm:inline">+91-8447753524</span>
            </a>

            <span className="hidden sm:inline text-gray-500">|</span>

            <a href="#" className="flex items-center gap-2 text-sm hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              <span className="hidden sm:inline">Pay Fee Online</span>
            </a>

            <span className="hidden sm:inline text-gray-500">|</span>

            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>

            <span className="hidden sm:inline text-gray-500">|</span>

            <button className="flex items-center gap-2 text-sm hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="hidden lg:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <Image src="/assets/images/logo.png" alt="I.T.S Institute Logo" width={60} height={60} className="w-auto h-auto" />
              <div>
                <h1 className="text-lg font-bold">
                  <span style={{ letterSpacing: '0.1em' }}>I.T.S</span> Institute of Health And Allied Sciences
                </h1>
                <p className="text-sm text-gray-600">Affiliated to Atal Bihari Vajpayee Medical University, Lucknow</p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="text-xs font-semibold">NAAC</span>
                <span className="text-xs">Accredited</span>
                <span className="text-xs font-bold">Institute</span>
              </div>
              <a href="#virtual-tour" className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                Virtual Tour
              </a>
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="border-t">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col md:flex-row gap-0 md:gap-1">
              {['About Us', 'Academics', 'Admissions', 'Faculty', 'Infrastructure', 'Research', 'Student Life', 'Alumni', 'Career & Placement', 'NAAC'].map((item) => (
                <li key={item} className="border-b md:border-b-0">
                  <button
                    onClick={() => setActiveMenu(activeMenu === item ? null : item)}
                    className="w-full md:w-auto px-4 py-3 text-left md:text-center hover:bg-gray-100 md:hover:bg-gray-50 flex items-center justify-between md:justify-center gap-2"
                  >
                    {item}
                    {item !== 'NAAC' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden md:inline">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to I.T.S IHAS</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Premier healthcare education institution offering BPT, MPT & Biotechnology programs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded font-semibold hover:bg-gray-100">
                Explore Programs
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded font-semibold hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Our Programs</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Bachelor of Physiotherapy (BPT)', description: '4-year comprehensive program' },
                { title: 'Master of Physiotherapy (MPT)', description: '2-year advanced specialization' },
                { title: 'Biotechnology', description: 'B.Sc & M.Sc programs in Biotechnology' }
              ].map((program) => (
                <div key={program.title} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-bold mb-2">{program.title}</h4>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold mb-4">About IHAS</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">About College</a></li>
                <li><a href="#" className="hover:text-blue-400">Vision & Mission</a></li>
                <li><a href="#" className="hover:text-blue-400">Campus Map</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Academics</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Academic Calendar</a></li>
                <li><a href="#" className="hover:text-blue-400">Syllabus</a></li>
                <li><a href="#" className="hover:text-blue-400">Sanctioned Intake</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Admissions</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Apply Now</a></li>
                <li><a href="#" className="hover:text-blue-400">Eligibility</a></li>
                <li><a href="#" className="hover:text-blue-400">Fee Structure</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contact</h5>
              <ul className="space-y-2 text-sm">
                <li>Phone: +91-8447753524</li>
                <li>Email: info@ihas.edu.in</li>
                <li>Ghaziabad, Uttar Pradesh</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2024 I.T.S Institute of Health & Allied Sciences. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

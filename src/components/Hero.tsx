import React from "react";
import { openCalendlyPopup } from '@/components/CalendlyWidget';
import TypewriterText from '@/components/TypewriterText';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-red-400/40 rounded-full animate-pulse" style={{top: '60%', left: '80%', animationDelay: '1s'}}></div>
        <div className="absolute w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{top: '40%', left: '70%', animationDelay: '2s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-300/50 rounded-full animate-pulse" style={{top: '80%', left: '20%', animationDelay: '3s'}}></div>
        <div className="absolute w-2 h-2 bg-red-300/30 rounded-full animate-pulse" style={{top: '30%', left: '90%', animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center min-h-screen gap-8 px-6 py-24 text-white text-center">
        {/* Company Name Display */}
        <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
          {/* House/Computer Logo */}
          <div className="w-32 h-32 md:w-40 md:h-40">
            <svg viewBox="0 0 150 150" className="w-full h-full drop-shadow-2xl">
              <g stroke="#fff" strokeWidth="4" fill="none">
                <path d="M75 20 L130 60 L130 120 L20 120 L20 60 Z" />
                <path d="M15 65 L75 15 L135 65" strokeWidth="5" />
                <rect x="60" y="75" width="30" height="45" fill="#3b82f6" stroke="#fff" />
                <rect x="40" y="85" width="35" height="25" stroke="#3b82f6" fill="#1e3a8a" />
                <rect x="75" y="85" width="35" height="25" stroke="#3b82f6" fill="#1e3a8a" />
              </g>
            </svg>
          </div>
          
          {/* Company Name */}
          <div className="text-left">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                DETACHED
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent drop-shadow-2xl animate-pulse ml-8 md:ml-12">
                SOLUTIONS
              </span>
            </h1>
          </div>
          
          {/* American Flag */}
          <div className="w-24 h-16 md:w-32 md:h-20 relative">
            <div className="w-full h-full bg-gradient-to-b from-red-600 via-white to-red-600 relative border border-white/20 shadow-2xl">
              <div className="absolute top-0 left-0 w-2/5 h-3/5 bg-blue-800"></div>
              {/* Stripes */}
              <div className="absolute inset-0">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`absolute w-full h-[7.14%] ${i % 2 === 0 ? 'bg-red-600' : 'bg-white'}`} style={{top: `${i * 14.28}%`}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Veteran Owned Badge */}
        <div className="text-2xl md:text-4xl font-bold text-blue-400 tracking-widest uppercase mb-4 animate-pulse">
          ★ VETERAN OWNED BUSINESS ★
        </div>
        
        {/* Subtitle */}
        <div className="text-xl md:text-3xl font-light text-white/90 max-w-4xl leading-relaxed mb-8">
          IT CONSULTING & MANAGED SERVICES<br />
          FOR SMALL BUSINESSES
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={openCalendlyPopup}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg rounded-full shadow-2xl transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105 hover:from-blue-500 hover:to-blue-600 uppercase tracking-wide"
          >
            Get Started Today
          </button>
          <a
            href="#services"
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-blue-400 hover:scale-105 uppercase tracking-wide"
          >
            View Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
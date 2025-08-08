import React from 'react';

function HeroInternships() {
  return (
<div className="py-0 bg-gradient-to-br from-white via-white to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-indigo-950 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-indigo-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-300 rounded-full animate-bounce"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1
            className="text-5xl md:text-7xl font-black mb-8 leading-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white">
              Our Internship Projects
            </span>
          </h1>

          <p
            className="text-xl md:text-xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed mb-12"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
Discover the internship opportunities currently available within our company.

          </p>

          
          </div>
        </div>
      </div>
  );
}

export default HeroInternships;

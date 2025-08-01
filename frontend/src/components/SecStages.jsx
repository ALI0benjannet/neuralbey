import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SecStages() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Intersection Observer pour déclencher les animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-white to-white py-20 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête principal */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-x-12 gap-y-8 mb-16">
          {/* Titre à gauche avec animations */}
          <div className="md:w-[45%] text-center md:text-left">
            <div className="overflow-hidden">
              <h2
                className={`text-4xl sm:text-6xl md:text-7xl font-bold text-black mb-4 transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                Looking for
                <br />
                <span className="relative">
                  <span className="text-blue-950"> an internship ? </span>
                  {/* Ligne décorative sous le texte */}
                  <div
                    className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-1000 delay-500 ${
                      isVisible ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </span>
              </h2>
            </div>
          </div>

          {/* Texte à droite avec animation */}
          <div className="md:w-[45%] text-center md:text-left">
            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <p
                className="text-xl text-gray-800 leading-relaxed mb-6"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                <span className="text-blue-700 font-semibold">Discover </span> our
                opportunities and join a team passionate about innovation.{' '}
                <span className="text-black">
                  <span className="text-blue-900 font-semibold">Develop </span> your skills
                  in a dynamic professional environment.
                </span>
              </p>
              <br />
            </div>
          </div>
        </div>

        {/* Call-to-action subtil */}
        <div
          className={`text-center mt-12 transform transition-all duration-1000 delay-1600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          <button
            onClick={() => navigate('/internships')}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-950 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>See Internship Opportunities</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <br />
    </section>
  );
}

export default SecStages;

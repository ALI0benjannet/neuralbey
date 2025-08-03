import React, { useState, useEffect, useRef } from 'react';

function Apropos() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

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

  const features = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "Cutting-edge solutions that push technological boundaries"
    },
    {
      icon: "🧠",
      title: "Intelligence",
      description: "AI-powered systems that learn and adapt to your needs"
    },
    {
      icon: "🔗",
      title: "Integration",
      description: "Seamless connectivity across all digital platforms"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "90+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-white via-white to-white py-20 px-6 overflow-hidden">
      
      

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
                About <br />
                <span className="relative">
                  <span className="text-blue-950">Neuralbey</span>
                  {/* Ligne décorative sous Neuralbey */}
                  <div className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-1000 delay-500 ${
                    isVisible ? 'w-full' : 'w-0'
                  }`}></div>
                </span>
              </h2>
            </div>
            
        
          </div>

          {/* Texte à droite avec animation */}
          <div className="md:w-[80%] text-center md:text-left">
            <div className={`transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <p
                className="text-xl text-gray-800 leading-relaxed mb-6"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                <span className="text-blue-700 font-semibold">Neuralbey</span> is an innovative technology company specializing in the design of intelligent digital solutions.


                <span className="text-cyan-600 font-medium">We support </span> businesses in their digital transformation by developing tailor-made systems that combine artificial intelligence, web development, and IoT integration.
<br />  <span className="text-cyan-400 font-medium"> Our mission : </span> to put technology at the service of your performance, through reliable, scalable, and future-oriented solutions.
              </p>
            
              <br />
            </div>
          </div>

        </div>


        {/* Section statistiques */}
        <div className={`bg-gradient-to-r from-black to-blue-950 p-8 md:p-12 text-white transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Anton', sans-serif" }}>
              Our Impact
            </h3>
            <p className="text-blue-100" style={{ fontFamily: "'Jost', sans-serif" }}>
              Delivering excellence across all our services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
                style={{ transitionDelay: `${1400 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2" style={{ fontFamily: "'Anton', sans-serif" }}>
                  {stat.number}
                </div>
                <div className="text-blue-100 text-sm" style={{ fontFamily: "'Jost', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-action subtil */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-1600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}>
          <button
  onClick={() => {
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-950 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
>
  <span>Discover Our Services</span>
  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>

        </div>

      </div>
    </section>
  );
}

export default Apropos;
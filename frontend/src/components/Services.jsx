import React from 'react';
import { useNavigate } from 'react-router-dom';
import devImage from '../assets/dev.jpg';
import aiImage from '../assets/ai.jpg';
import iotImage from '../assets/iot.jpg';
import robotImage from '../assets/robot.jpg';

const services = [
  {
    title: 'Software Development',
    description: 'Custom web, mobile, and system application solutions tailored to your needs.',
    bgImage: devImage
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Cutting-edge AI and Machine Learning solutions designed to accelerate your business growth through intelligent automation and data-driven insights.',
    bgImage: aiImage
  },
  {
    title: 'Internet of Things & Electronics',
    description: 'Seamless connectivity and automation through smart devices.',
    bgImage: iotImage
  },
  {
    title: 'Robotics & Innovative Technologies',
    description: 'Development of robotic solutions to enhance industrial processes and smart services.',
    bgImage: robotImage
  }
];

function Services() {
  const navigate = useNavigate();

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton:wght@400&family=Jost:wght@300;400;500;600&display=swap');
        
        .anton-font {
          font-family: 'Anton', sans-serif;
          letter-spacing: 0.02em;
        }
        
        .jost-font {
          font-family: 'Jost', sans-serif;
        }
      `}</style>
      
      <section id="services" className="py-12 bg-gradient-to-br from-black via-black-900 to-slate-900 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="anton-font text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center mb-12 tracking-wider uppercase bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer transform transition-all duration-700 hover:scale-110 hover:-translate-y-4 rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
                onClick={() => navigate('/services')}  // redirection au clic
              >
                {/* Image de fond avec overlay gradient */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 filter blur-sm"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                ></div>

                {/* Overlay gradient dynamique */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-500"></div>

                {/* Contenu de la carte */}
                <div className="relative z-10 h-80 p-6 flex flex-col justify-between">
                  <div className="text-center">
                    <h3 className="anton-font text-white font-normal text-4xl md:text-3xl mt-12 mb-4 tracking-wide uppercase leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="jost-font text-gray-200 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 font-light">
                      {service.description}
                    </p>
                    
                    {/* Barre de progression animée */}
                    <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 transition-all duration-1000 delay-200 rounded-full">
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicateurs animés améliorés */}
          <div className="flex justify-center mt-12 space-x-6">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="relative">
                <div
                  className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
                <div
                  className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping"
                  style={{ animationDelay: `${i * 200 + 100}ms` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
      <br />
      <br />
    </>
  );
}

export default Services;

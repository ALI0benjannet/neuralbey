import React, { useState } from 'react';
import { Code, Brain, Cpu, Bot, ArrowRight, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ServicesPage() {

  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      subtitle: 'Custom Applications',
      description: 'Design and development of custom web and mobile applications using robust, scalable technologies to turn your ideas into high-performance digital solutions.',
      features: [
        'Web & Mobile Applications',
        'Cloud-Native Solutions',
        'APIs & Integrations',
        'Microservices Architecture'
      ],
      technologies: ['React', 'Node.js', 'Python'],
      bg: 'from-slate-900 via-blue-950 to-indigo-900',
      accent: 'from-blue-400 to-cyan-400',
      stats: { satisfaction: '98%' }
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence & Machine Learning',
      subtitle: 'Advanced Artificial Intelligence',
      description: 'AI-driven solutions to automate processes, analyze data, and build intelligent systems that learn and adapt over time.',
      features: [
        'Custom Machine Learning',
        'Computer Vision',
        'Natural Language Processing',
        'Predictive Analytics'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI'],
      bg: 'from-slate-900 via-blue-950 to-indigo-900',
      accent: 'from-blue-500 to-indigo-500',
      stats: {satisfaction: '96%' }
    },
    {
      icon: Cpu,
      title: 'Internet of Things & Electronics',
      subtitle: 'Connected Ecosystems',
      description: 'Development of smart IoT systems to collect, analyze, and process data in real-time across connected environments.',
      features: [
        'IoT Sensors & Devices',
        'Management Platforms',
        'Edge Computing',
        'Real-Time Analytics'
      ],
      technologies: ['Arduino', 'Raspberry Pi', 'ESP32'],
      bg: 'from-slate-900 via-blue-950 to-indigo-900',
      accent: 'from-cyan-400 to-blue-500',
      stats: {satisfaction: '97%' }
    },
    {
      icon: Bot,
      title: 'Robotics & Innovative Technologies',
      subtitle: 'Intelligent Robotics',
      description: 'Development of advanced robotic solutions integrating AI, mechatronics, and smart sensors for industrial automation.',
      features: [
        'Industrial Robotics',
        'Smart Automation',
        'Computer Vision',
        'Adaptive Control'
      ],
      technologies: ['ROS', 'OpenCV', 'MATLAB', 'Industrial IoT'],
      bg: 'from-slate-900 via-blue-950 to-indigo-900',
      accent: 'from-indigo-500 to-blue-600',
      stats: {satisfaction: '99%' }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
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
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white">
              Our Services
            </span>
          </h1>

          <p className="text-xl md:text-xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed mb-12" style={{ fontFamily: "'Jost', sans-serif" }}>
            Innovative digital technologies to turn your ideas into reality and propel your business into the future.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Jost', sans-serif" }}>150+</div>
              <div className="text-blue-200 text-sm" style={{ fontFamily: "'Jost', sans-serif" }}>Accomplished Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Jost', sans-serif" }}>98%</div>
              <div className="text-blue-200 text-sm" style={{ fontFamily: "'Jost', sans-serif" }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Anton', sans-serif" }}>
            Our Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: "'Jost', sans-serif" }}>
            Custom solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative bg-gradient-to-br ${service.bg} rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-3`}
              >
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.accent} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-blue-200 text-sm font-medium mb-4 uppercase tracking-wide">
                    {service.subtitle}
                  </p>

                  <p className="text-blue-100/80 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-white mb-4 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-blue-300" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-blue-100/90 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                          <CheckCircle className="w-4 h-4 mr-3 text-blue-300 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-white mb-4 flex items-center">
                      <Cpu className="w-4 h-4 mr-2 text-blue-300" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl text-xs font-semibold text-blue-100 border border-blue-400/20 hover:bg-blue-500/30 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex space-x-6">
                      <div className="text-center">
                        <div className="text-xl font-bold text-white flex items-center">
                      
                        </div>
                       
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white flex items-center">
                          <Users className="w-4 h-4 mr-1 text-blue-300" style={{ fontFamily: "'Jost', sans-serif" }} />
                          {service.stats.satisfaction}
                        </div>
                        <div className="text-xs text-blue-200 " style={{ fontFamily: "'Jost', sans-serif" }} >Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-black via-blue-950 to-slate-900 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Anton', sans-serif" }}>
                Ready to transform your project?
              </h3>
              <p className="text-xl text-blue-100/80 mb-8 mx-auto" style={{ fontFamily: "'Jost', sans-serif" }}>
                Reach out to our team of experts to discuss your needs and discover how we can help you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-2xl text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center group"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;

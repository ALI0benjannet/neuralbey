import React, { useState } from 'react';

function SidebarAdmin() {
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    {
      path: '/admin/add-internship',
      icon: '✨',
      label: 'Add Internship',
      description: 'Create new opportunities',
      gradient: 'from-black to-blue-950 to-blue-800',
      hoverGradient: 'from-blue-950 to-cyan-600'
    },
    {
      path: '/admin/projects',
      icon: '🚀',
      label: 'Projects',
      description: 'Manage Projects',
      gradient: 'from-black to-blue-950 to-blue-800',
      hoverGradient: 'from-blue-950 to-cyan-600'
    },
    {
      path: '/admin/Applicants',
      icon: '👥',
      label: 'Applicants',
      description: 'Manage Applicants',
      gradient: 'from-black to-blue-950 to-blue-800',
      hoverGradient: 'from-blue-950 to-cyan-600'
    },
    
  ];

  const handleItemClick = (index) => {
    setActiveItem(index);
    // Here you would normally navigate using your router
    console.log(`Navigating to: ${menuItems[index].path}`);
  };

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 shadow-2xl backdrop-blur-sm border-r border-gray-200/50 dark:border-gray-700/50 z-40 overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative p-6 flex flex-col h-full">
               

        {/* Menu Items */}
        <nav className="flex-1 space-y-3">
          {menuItems.map((item, index) => (
            <button
              key={item.path}
              onClick={() => handleItemClick(index)}
              className={`
                group relative w-full text-left p-4 rounded-2xl transition-all duration-300 transform
                ${activeItem === index 
                  ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg scale-105` 
                  : 'hover:scale-105 hover:shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50'
                }
              `}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Hover gradient overlay */}
              {hoveredItem === index && activeItem !== index && (
                <div className={`absolute inset-0 bg-gradient-to-r ${item.hoverGradient} opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              )}
              
              <div className="relative flex items-center space-x-4">
                <div className={`
                  text-2xl p-2 rounded-xl transition-all duration-300
                  ${activeItem === index 
                    ? 'bg-white/20 shadow-lg transform rotate-12' 
                    : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 group-hover:shadow-md group-hover:scale-110'
                  }
                `}>
                  {item.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className={`
                    font-semibold text-lg transition-colors duration-300
                    ${activeItem === index 
                      ? 'text-white' 
                      : 'text-gray-800 dark:text-gray-200'
                    }
                  `}>
                    {item.label}
                  </div>
                  <div className={`
                    text-sm transition-colors duration-300
                    ${activeItem === index 
                      ? 'text-white/80' 
                      : 'text-gray-500 dark:text-gray-400'
                    }
                  `}>
                    {item.description}
                  </div>
                </div>
                
                {/* Arrow indicator */}
                <div className={`
                  transition-all duration-300 transform
                  ${activeItem === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}
                `}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Active indicator */}
              {activeItem === index && (
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full shadow-lg"></div>
              )}
            </button>
          ))}
        </nav>

        {/* Stats Card */}
        <div className="mt-6 p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-indigo-200/30 dark:border-purple-700/30">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Quick Stats</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <div className="text-xl font-bold text-indigo-600 dark:text-indigo-800">24</div>
              <div className="text-xs text-gray-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-700 dark:text-cyan-500">12</div>
              <div className="text-xs text-gray-500">Applicants</div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default SidebarAdmin;
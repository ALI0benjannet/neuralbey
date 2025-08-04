import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function App() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <>

     

      {/* Hero Section */}
      <div
        className="max-w-screen-2xl h-[80vh] relative bg-cover bg-center mt-5 mb-20"
        style={{ backgroundImage: `url(${assets.couverture})` }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Texte à gauche, centré verticalement */}
        <div className="relative z-10 h-full flex items-center px-6 sm:px-20">
          <div className="max-w-xl text-left">
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-white text-4xl sm:text-7xl mb-5"
            >
              Neuralbey
            </h1>

            <p
              className="font-jost text-white text-lg mb-4"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Innovation. Intelligence. Integration. <br />
              Experts in software development, AI, IoT, electronics, and robotics.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-black px-6 py-1 hover:bg-gray-200 transition rounded-2xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

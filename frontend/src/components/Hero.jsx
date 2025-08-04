import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function App() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Bouton pour ouvrir le menu */}
      <button
        onClick={() => setVisible(true)}
        className="fixed top-4 zleft-4 z-60 p-2 bg-blue-900 text-white rounded-md md:hidden"
      >
        Menu
      </button>

      {/* Side menu for small screens */}
      <div
        className={`fixed top-0 left-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ease-in-out z-60 ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-2 p-3 cursor-pointer border-b"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="Back"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/services"
          >
            SERVICES
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/internships"
          >
            OPPORTUNITIES
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/contact"
          >
            CONTACT US
          </NavLink>
        </div>
      </div>

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

import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [formData, setFormData] = useState({ login: '', password: '' });

  const toggleModal = () => setShowLoginModal(prev => !prev);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.login === 'Admineuralbey@gmail.com' &&
      formData.password === 'admin'
    ) {
      setShowLoginModal(false);
      navigate('/admin');
    } else {
      alert('Login ou mot de passe incorrect');
    }
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      {/* Logo */}
      <img src={assets.logo} className="w-36" alt="Logo" />

      {/* Menu desktop */}
      <ul className="sm:flex gap-5 text-lg text-black hidden">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink to="/services" className="flex flex-col items-center gap-1">
          <p>SERVICES</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/internships" className="flex flex-col items-center gap-1">
          <p>OPPORTUNITIES</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT US</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Profile icon and mobile menu button */}
      <div className="relative group flex items-center gap-6">
        <img
          className="w-5 cursor-pointer"
          src={assets.profile_icon}
          alt="Profile"
          onClick={toggleModal}
        />
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden fixed top-1 right-4 z-50"
          alt="Menu"
        />
      </div>

      {/* Side menu for small screens */}
      <div
        className={`fixed top-0 left-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ease-in-out z-50 ${
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

      {/* Modal Login Admin */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-96 p-8 relative animate-fadeIn">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-3xl font-bold transition"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="flex justify-center mb-6">
              <img
                src={assets.logo}
                alt="Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="login"
                  className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
                >
                  Login Admin
                </label>
                <input
                  id="login"
                  name="login"
                  type="text"
                  required
                  value={formData.login}
                  onChange={handleChange}
                  placeholder="Enter your login"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 rounded-xl shadow-lg transition transform hover:scale-[1.03]"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

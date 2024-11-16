import React, { useState } from 'react';
import 'hamburgers/dist/hamburgers.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 absolute z-10 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Klift</div>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-gray-400">Home</a>
          <a href="#about" className="text-white hover:text-gray-400">About</a>
          <a href="#projects" className="text-white hover:text-gray-400">Projects</a>
          <a href="#services" className="text-white hover:text-gray-400">Services</a>
          <a href="#blog" className="text-white hover:text-gray-400">Blog</a>
          <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`hamburger hamburger--spin text-white ${isMenuOpen ? 'is-active' : ''}`}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden flex flex-col items-center bg-gray-700 text-white space-y-4 transition-all duration-300 transform ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        {isMenuOpen && (
          <>
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#services" className="hover:text-gray-400">Services</a>
            <a href="#blog" className="hover:text-gray-400">Blog</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

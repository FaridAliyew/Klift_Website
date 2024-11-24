import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'hamburgers/dist/hamburgers.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 absolute z-10 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Klift</div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link>
          <Link to="/services" className="text-white hover:text-gray-400">Services</Link>
          <Link to="/blog" className="text-white hover:text-gray-400">Blog</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
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
            <Link to="/home" className="hover:text-gray-400">Home</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/projects" className="hover:text-gray-400">Projects</Link>
            <Link to="/services" className="hover:text-gray-400">Services</Link>
            <Link to="/blog" className="hover:text-gray-400">Blog</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

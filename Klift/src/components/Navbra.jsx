import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'hamburgers/dist/hamburgers.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-pink-400'
      : 'text-white hover:text-gray-400';
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="p-4 absolute z-20 w-full">
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-20">
        <div className="text-white text-2xl font-bold">Klift</div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>About</Link>
          <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
          <Link to="/services" className={getLinkClass('/services')}>Services</Link>
          <Link to="/blog" className={getLinkClass('/blog')}>Blog</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
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
        className={`md:hidden flex flex-col items-center rounded-3xl py-3 bg-black/60 border border-white text-white space-y-4 transition-all duration-300 transform ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} relative z-20`}
      >
        {isMenuOpen && (
          <>
            <Link to="/" className={getLinkClass('/')} onClick={handleLinkClick}>Home</Link>
            <Link to="/about" className={getLinkClass('/about')} onClick={handleLinkClick}>About</Link>
            <Link to="/projects" className={getLinkClass('/projects')} onClick={handleLinkClick}>Projects</Link>
            <Link to="/services" className={getLinkClass('/services')} onClick={handleLinkClick}>Services</Link>
            <Link to="/blog" className={getLinkClass('/blog')} onClick={handleLinkClick}>Blog</Link>
            <Link to="/contact" className={getLinkClass('/contact')} onClick={handleLinkClick}>Contact</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

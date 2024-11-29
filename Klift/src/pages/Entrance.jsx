import React from 'react';
import { useLocation } from 'react-router-dom';

function Entrance() {
  const location = useLocation();

  const pageTitle = {
    '/about': 'About',
    '/contact': 'Contact',
    '/projects': 'Projects',
    '/services': 'Services',
    '/blog': 'Blog',
    '/': 'Home',
  }[location.pathname] || 'Page Not Found';

 
  return (
    <div className="relative bg-entrance w-full h-entrance bg-center bg-cover text-white grid items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <h1 data-aos="fade-up" className="relative text-6xl">{pageTitle}</h1>
    </div>
  );
}

export default Entrance;

import React, { useState, useEffect } from "react";
import slide1 from "../images/slide-img1.png";
import slide2 from "../images/slide-img2.png";
import AOS from 'aos';

function Carousel() {

  useEffect(() => {
    AOS.init({
        duration: 1000, 
        easing: 'ease-in-out', 
        once: true, 
    });
}, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div data-aos="fade-up" className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <div className="rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Transforming Spaces with Elegance</h1>
          <p className="text-lg mb-8 w-slider-width ms-auto me-auto">
          We design furniture that complements your lifestyle while ensuring exceptional comfort and durability. Discover pieces that transform your space into a haven.
          </p>
          <button className="px-6 py-3 bg-white bg-opacity-0 border rounded-full transition-colors duration-300 text-white hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

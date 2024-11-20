import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function OfficeInterior() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className="mt-56">
            <div data-aos="fade-up">
                <h1 className="text-center text-4xl font-bold text-gray-700">Our Projects</h1>
                <p className="text-center text-gray-500 mt-6 w-2/3 ms-auto me-auto">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences
                </p>
            </div>

            <div className="mt-40 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cursor-pointer">
                <div data-aos="fade-up" data-aos-delay="0" className="relative bg-interior1 h-interior bg-cover bg-center bg-no-repeat group">
                    <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-white/0 group-hover:opacity-100"></div>
                    <h1 className="relative text-white uppercase text-2xl p-10 z-10 transition-opacity duration-300 group-hover:opacity-0">
                        Office Interior Design in Paris
                    </h1>
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="relative bg-interior2 h-interior bg-cover bg-center bg-no-repeat group">
                    <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-white/0 group-hover:opacity-100"></div>
                    <h1 className="relative text-white uppercase text-2xl p-10 z-10 transition-opacity duration-300 group-hover:opacity-0">
                        Office Interior Design in Paris
                    </h1>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className="relative bg-interior3 h-interior bg-cover bg-center bg-no-repeat group">
                    <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-white/0 group-hover:opacity-100"></div>
                    <h1 className="relative text-white uppercase text-2xl p-10 z-10 transition-opacity duration-300 group-hover:opacity-0">
                        Office Interior Design in Paris
                    </h1>
                </div>

                <div data-aos="fade-up" data-aos-delay="600" className="relative bg-interior4 h-interior bg-cover bg-center bg-no-repeat group">
                    <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-white/0 group-hover:opacity-100"></div>
                    <h1 className="relative text-white uppercase text-2xl p-10 z-10 transition-opacity duration-300 group-hover:opacity-0">
                        Office Interior Design in Paris
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default OfficeInterior;

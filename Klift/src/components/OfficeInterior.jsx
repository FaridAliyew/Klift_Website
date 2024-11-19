import React from 'react'

function OfficeInterior() {
    return (
        <div className='mt-56'>
            <div>
                <h1 className='text-center text-4xl font-bold text-gray-700'>Our Projects</h1>
                <p className='text-center text-gray-500 mt-6 w-2/3 ms-auto me-auto'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences</p>
            </div>

            <div className="mt-40 flex flex-col lg:flex-row cursor-pointer">
                <div className="relative bg-interior1 h-interior bg-cover bg-center bg-no-repeat w-full group">
                    <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-white/0 group-hover:opacity-100"></div>
                    <h1 className="relative text-white uppercase text-2xl p-10 z-10 transition-opacity duration-300 group-hover:opacity-0">
                        Office Interior Design in Paris
                    </h1>
                </div>

                <div className="relative bg-interior2 h-interior bg-cover bg-center w-full group">
                    <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-white/0 group-hover:opacity-100"></div>
                    <h1 className="relative text-white uppercase text-2xl p-10 z-10 transition-opacity duration-300 group-hover:opacity-0">
                        Office Interior Design in Paris
                    </h1>
                </div>

                <div className="relative bg-interior3 h-interior bg-cover bg-center w-full group">
                    <div className="absolute inset-0 bg-black/30 duration-300 transition-all group-hover:bg-white/0 group-hover:opacity-100"></div>
                    <h1 className="relative text-white uppercase text-2xl p-10 z-10 transition-opacity duration-300 group-hover:opacity-0">
                        Office Interior Design in Paris
                    </h1>
                </div>

                <div className="relative bg-interior4 h-interior bg-cover bg-center w-full group">
                    <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-white/0 group-hover:opacity-100"></div>
                    <h1 className="relative text-white uppercase text-2xl p-10 z-10 transition-opacity duration-300 group-hover:opacity-0">
                        Office Interior Design in Paris
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default OfficeInterior
import React, { useEffect } from 'react'
import AOS from 'aos';

function Section() {

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);



    return (
        <div data-aos="fade-up" className='flex flex-col md:justify-center md:flex-row gap-20 px-20 md:px-24 -mt-12 relative'>
            <div>
                <div className='bg-icon w-icon rounded-full p-7 mb-8'>
                    <img width="60" height="50" src="https://img.icons8.com/ios/50/design--v1.png" alt="design--v1" />
                </div>

                <h1 className='uppercase font-bold mb-3 font-Pt-Sans'>Perfectly Design</h1>
                <p className='text-gray-500'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>

            <div>
                <div className='bg-icon w-icon rounded-full p-8 mb-8'>
                    <img width="52" height="52" src="https://img.icons8.com/metro/52/ball-point-pen.png" alt="ball-point-pen" />
                </div>
                <h1 className='uppercase font-bold mb-3 font-Pt-Sans'>Carefully Planned</h1>
                <p className='text-gray-500'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>

            <div>
                <div className='bg-icon w-icon rounded-full p-8 mb-8'>
                    <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/stationery--v2.png" alt="stationery--v2" />
                </div>
                <h1 className='uppercase font-bold mb-3 font-Pt-Sans'>Smartly Execute</h1>
                <p className='text-gray-500'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
        </div>
    )
}

export default Section
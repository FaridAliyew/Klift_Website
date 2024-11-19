import React, { useEffect } from 'react'
import about from '../images/about.png'
import AOS from 'aos';


function SectionTwo() {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);

    return (
        <div className='px-20 mt-44 flex flex-col lg:flex-row gap-20'>
            <div className="relative">
                <img src={about} alt="Plan" className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
            </div>

            <div data-aos="fade-up" className='w-full lg:w-1/2'>
                <h1 className='text-2xl uppercase text-gray-400 mb-3'>About</h1>
                <p className='font-bold text-3xl text-gray-700'>We are the best interior & Architect Consultant in Italy</p> <br />

                <hr className='border-pink-300 border-solid border-1' /> <br />

                <p className='text-gray-400'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p> <br />

                <p className='text-gray-400'>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p> <br />

                <button className='text-pink-400'>Learn More</button>
            </div>
        </div>
    )
}

export default SectionTwo
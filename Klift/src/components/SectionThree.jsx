import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function SectionThree() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section className='px-5 lg:px-20 mt-72 flex flex-col lg:flex-row gap-20'>

            <div data-aos="fade-up" data-aos-delay="200" className='w-full lg:w-1/2 lg:order-1 order-2'>
                <h1 className='text-2xl uppercase text-gray-400 mb-3'>Perfect</h1>
                <p className='font-bold text-3xl text-gray-700'>We Make Perfection</p> <br />

                <hr className='border-pink-300 border-solid border-1' /> <br />

                <p className='text-gray-400'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p> <br />

                <p className='text-gray-400'>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p> <br />

                <button className='text-pink-400'>Learn More</button>
            </div>

            <div className="bg-img h-96 lg:h-interior w-full lg:w-2/5 bg-cover bg-center lg:order-2 order-1"></div>
        </section>
    )
}

export default SectionThree
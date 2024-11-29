import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../images/person1.png';
import img2 from '../images/person2.png';
import img3 from '../images/person3.png';
import img4 from '../images/person4.png';
import img5 from '../images/person5.png';

const Swiper = () => {

    const slides = [
        {
            img: img1,
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name: "John Doe",
            position: "CEO"
        },
        {
            img: img2,
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name: "Jane Smith",
            position: "Marketing Director"
        },
        {
            img: img3,
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name: "Mike Johnson",
            position: "Developer"
        },
        {
            img: img4,
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name: "Emily Davis",
            position: "Designer"
        },
        {
            img: img5,
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name: "Chris Brown",
            position: "Product Manager"
        }
    ];

    return (
        <>
            <div data-aos="fade-up" className="text-center mt-40 mb-32">
                <h1 className="text-4xl font-bold text-gray-700">Our satisfied customer says</h1>
                <p className="text-gray-500 mt-6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>
            <SwiperComponent
                spaceBetween={50}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            className="bg-white px-20 cursor-grab"
                        >
                            <img
                                src={slide.img}
                                alt={`Image of ${slide.name}`}
                                className="w-20 rounded-full h-20 object-cover mb-4"
                            />
                            <p className="text-lg text-gray-600 mb-4">{slide.text}</p>
                            <h2 className="text-xl font-semibold text-gray-800">{slide.name}</h2>
                            <p className="text-gray-500">{slide.position}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </>
    );
};

export default Swiper;

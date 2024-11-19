import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../images/about.png';

const Swiper = () => {
    const slides = [
        {
            img: img1,
            text: "This is a testimonial text.",
            name: "John Doe",
            position: "CEO"
        },
        {
            img: "https://via.placeholder.com/400x300",
            text: "Another testimonial text here.",
            name: "Jane Smith",
            position: "Marketing Director"
        },
        {
            img: "https://via.placeholder.com/400x300",
            text: "Yet another testimonial message.",
            name: "Mike Johnson",
            position: "Developer"
        },
        {
            img: "https://via.placeholder.com/400x300",
            text: "This is a sample testimonial.",
            name: "Emily Davis",
            position: "Designer"
        },
        {
            img: "https://via.placeholder.com/400x300",
            text: "Great words from a customer.",
            name: "Chris Brown",
            position: "Product Manager"
        }
    ];

    return (
        <SwiperComponent
            spaceBetween={50}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
                1024: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 3,
                },
                480: {
                    slidesPerView: 1,
                },
            }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img
                            src={slide.img}
                            alt={`Image of ${slide.name}`}
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <p className="text-lg text-gray-600 mb-4">{slide.text}</p>
                        <h2 className="text-xl font-semibold text-gray-800">{slide.name}</h2>
                        <p className="text-gray-500">{slide.position}</p>
                    </div>
                </SwiperSlide>
            ))}
        </SwiperComponent>
    );
};

export default Swiper;

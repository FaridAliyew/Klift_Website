import React, { useEffect } from 'react';
import team1 from '../images/team1.png';
import team2 from '../images/team2.png';
import team3 from '../images/team3.png';
import team4 from '../images/team4.png';
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className="mt-56 mb-52">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-700">Our Architect Team</h1>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in
                </p>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        img: team1,
                        name: "Liam Anderson",
                        position: "CEO",
                        desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
                        delay: 100, 
                    },
                    {
                        img: team2,
                        name: "Sophia Turner",
                        position: "Designer",
                        desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
                        delay: 200,
                    },
                    {
                        img: team3,
                        name: "Ethan Mitchell",
                        position: "Software engineer",
                        desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
                        delay: 300,
                    },
                    {
                        img: team4,
                        name: "Noah Bennett",
                        position: "Developer",
                        desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
                        delay: 400,
                    },
                ].map((member, index) => (
                    <div 
                        key={index} 
                        className="relative group"
                        data-aos="fade-up" 
                        data-aos-delay={member.delay}
                    >
                        <img src={member.img} alt={member.name} className="w-full" />
                        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-white/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex gap-4 mb-4 cursor-pointer text-black text-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <BsTwitterX className='bg-pink-300/100 text-5xl p-3 rounded-full text-white'/>
                                <FaFacebookF className='bg-pink-300/100 text-5xl p-3 rounded-full text-white'/>
                                <GrInstagram className='bg-pink-300/100 text-5xl p-3 rounded-full text-white'/>
                            </div>
                        </div>
                        <h1 className="px-4 mt-3 text-2xl font-bold text-gray-700">{member.name}</h1>
                        <p className="px-4 text-gray-400">{member.position}</p>
                        <p className="px-4 mt-3 text-gray-500">{member.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;

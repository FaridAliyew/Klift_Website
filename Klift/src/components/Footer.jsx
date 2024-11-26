import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
    return (
        <footer className='bg-footer'>
            <div className='text-white grid grid-cols-1 lg:grid-cols-4 items-center md:justify-items-center px-16 h-auto lg:h-96'>
                <div className='mt-16'>
                    <h1 className='text-[22px] mb-5'>Klift</h1>
                    <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='icons flex gap-5 text-5xl mt-5'>
                        <BsTwitterX data-aos="fade-up" data-aos-delay="50" className='bg-gray-100/10 p-3 rounded-full' />
                        <FaFacebookF data-aos="fade-up" data-aos-delay="150" className='bg-gray-100/10 p-3 rounded-full' />
                        <GrInstagram data-aos="fade-up" data-aos-delay="300" className='bg-gray-100/10 p-3 rounded-full' />
                    </div>
                </div>
                <div className='text-start md:text-center lg:text-center mt-10 lg:mt-0'>
                    <h1 className='text-[22px] mb-5'>Links</h1>
                    <p className='text-gray-400'>Home</p>
                    <p className='my-1 text-gray-400'>About</p>
                    <p className='text-gray-400'>Services</p>
                    <p className='my-1 text-gray-400'>Project</p>
                    <p className='text-gray-400'>Contact</p>
                </div>
                <div className='text-start md:text-center mt-10 lg:mt-0 lg:text-start'>
                    <h1 className='text-[22px] mb-5'>Services</h1>
                    <p className='text-gray-400'>Architectural Design</p>
                    <p className='my-1 text-gray-400'>Interior Design</p>
                    <p className='text-gray-400'>Exterior Design</p>
                    <p className='my-1 text-gray-400'>Lighting Design</p>
                    <p className='text-gray-400'>AutoCAD Service</p>
                </div>
                <div className='text-start md:text-center mt-10 lg:text-start lg:mt-0'>
                    <h1 className='text-[22px] mb-8'>Have a Questions?</h1>
                    <div className='flex'>
                        <IoLocationSharp className='text-[30px]' />
                        <span className='ms-3 relative bottom-1 text-gray-400'>	203 Fake St. Mountain View, San Francisco, California, USA</span>
                    </div>
                    <div className='flex my-4'>
                        <FaPhoneAlt className='text-[20px]' />
                        <span className='ms-3 relative bottom-1 text-gray-400'>+2 392 3929 210</span>
                    </div>
                    <div className='flex'>
                        <IoMail className='text-[20px]' />
                        <span className='ms-3 relative bottom-1 text-gray-400'>info@yourdomain.com</span>
                    </div>
                </div>
            </div>
            <p className='text-gray-400 text-center p-16'>Copyright ©2024 All rights reserved | This template is made with 🤍 by Colorlib</p>
        </footer>
    )
}

export default Footer
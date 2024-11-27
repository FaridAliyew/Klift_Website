import React from 'react';
import img from '../images/contact.png';

function Contact() {
    return (
        <section className="px-6 md:px-20 mt-20">
            <h1 className="text-2xl font-semibold text-center md:text-left">
                Contact Information
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between mt-6 text-gray-400 text-sm md:text-base space-y-4 md:space-y-0">
                <p>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
                <p>Phone: + 1235 2355 98</p>
                <p>Email: info@yoursite.com</p>
                <p>Website: yoursite.com</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center mt-16 gap-8 p-6 md:p-8 bg-gray-50 rounded-lg shadow-lg">
                <img
                    src={img}
                    alt="Contact Us"
                    className="w-full md:w-[400px] lg:w-[500px] object-cover rounded-md shadow-md"
                />
                <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            placeholder="Message"
                            className="w-full p-3 h-32 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;

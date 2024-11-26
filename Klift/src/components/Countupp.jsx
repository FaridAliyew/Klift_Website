import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

function Countupp() {
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="bg-coutup bg-fixed bg-center bg-cover h-96 mt-5 flex text-white py-10 px-5"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div data-aos="fade-up" className="text-center">
                    <h3 className="text-2xl text-gray-400 text-start">SOME</h3>
                    <h1 className="text-4xl md:text-5xl text-start">Interesting Facts</h1>
                </div>

                <div className="flex flex-wrap justify-between w-full gap-10 md:gap-20">
                    <div data-aos="fade-up" className="text-center">
                        {startCount && (
                            <CountUp
                                className="text-4xl md:text-5xl font-bold"
                                end={18}
                                duration={2}
                            />
                        )}
                        <p className="mt-2 text-gray-300">Years of Experience</p>
                    </div>
                    <div data-aos="fade-up" className="text-center">
                        {startCount && (
                            <CountUp
                                className="text-4xl md:text-5xl font-bold"
                                end={351}
                                duration={2}
                            />
                        )}
                        <p className="mt-2 text-gray-300">Happy Clients</p>
                    </div>
                    <div data-aos="fade-up" className="text-center">
                        {startCount && (
                            <CountUp
                                className="text-4xl md:text-5xl font-bold"
                                end={564}
                                duration={2}
                            />
                        )}
                        <p className="mt-2 text-gray-300">Finished Projects</p>
                    </div>
                    <div data-aos="fade-up" className="text-center">
                        {startCount && (
                            <CountUp
                                className="text-4xl md:text-5xl font-bold"
                                end={300}
                                duration={2}
                            />
                        )}
                        <p className="mt-2 text-gray-300">Working Days</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Countupp;

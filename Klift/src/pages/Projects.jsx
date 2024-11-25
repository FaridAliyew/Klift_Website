import React from 'react';

function Projects() {
    const projectData = [
        { bgClass: "bg-interior5", delay: "0", title: "Office Interior Design in Paris" },
        { bgClass: "bg-interior2", delay: "100", title: "Office Interior Design in Paris" },
        { bgClass: "bg-interior7", delay: "200", title: "Office Interior Design in Paris" },
        { bgClass: "bg-interior4", delay: "300", title: "Office Interior Design in Paris" },
        { bgClass: "bg-interior1", delay: "100", title: "Office Interior Design in Paris" },
        { bgClass: "bg-interior6", delay: "200", title: "Office Interior Design in Paris" },
        { bgClass: "bg-interior3", delay: "300", title: "Office Interior Design in Paris" },
        { bgClass: "bg-interior8", delay: "400", title: "Office Interior Design in Paris" },
    ];

    return (
        <div className="mt-48 p-10">
            <div data-aos="fade-up">
                <h1 className="text-center text-4xl font-bold text-gray-700">Our Projects</h1>
                <p className="text-center text-gray-500 mt-6 w-2/3 ms-auto me-auto">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences
                </p>
            </div>

            <div className="mt-28 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cursor-pointer gap-1">
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={project.delay}
                        className={`relative ${project.bgClass} h-interior bg-cover bg-center bg-no-repeat group`}
                    >
                        <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-white/0 group-hover:opacity-100"></div>
                        <h1 className="relative text-white uppercase text-2xl p-10 z-10 transition-opacity duration-300 group-hover:opacity-0">
                            {project.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;

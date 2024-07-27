import React from "react";

const About = () => {
    return (
        <div className="background-wrapper min-h-screen flex flex-col justify-center items-center">
            <main className="main-content w-full flex flex-col items-center pt-4">
                <section className="flex justify-center mb-4">
                    <h1 className="text-3xl text-white font-semibold font-mono">
                        {`<About />`}
                    </h1>
                </section>
                <section className="flex justify-center items-center">
                    <div className="bg-gray-900 text-white p-4 rounded-md shadow-md w-3/4 max-w-4xl overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
                            <code>
                                {`
Experienced Software Developer with a proven track record in designing, installing, testing, and maintaining software systems. Proficient across multiple platforms, programming languages, and embedded systems. Skilled with cutting-edge development tools and methodologies, excelling in both independent and collaborative team environments. Strong mentor for fellow developers, fostering continuous learning. Detail-oriented and organized, capable of meeting tight deadlines. Enthusiastic team player dedicated to contributing to company success.
                                `}
                            </code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { About };

import React from "react";

const Home = () => {
    return (
        <div className="background-wrapper">
            <main className="main-content flex flex-col container mx-auto px-4">
                <section className="flex justify-start mt-4">
                    <h1 className="text-white text-4xl font-mono font-bold">Rob Gill</h1>
                </section>
                <section className="flex justify-center items-center pt-40">
                    <h2 className="text-3xl text-white font-semibold font-mono text-center">
                        It Works<br />On<br />My Machine
                    </h2>
                </section>
            </main>
        </div>
    );
};

export { Home };
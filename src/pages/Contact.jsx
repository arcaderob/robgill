import React from "react";
import { LinkedInLink, XLink } from "../components";

const Contact = () => {
    return (
        <div className="background-wrapper min-h-screen flex flex-col justify-center items-center">
            <main className="main-content w-full flex flex-col items-center pt-4">
                <section className="flex justify-center mb-4">
                    <h1 className="text-3xl text-white font-semibold font-mono">
                        {`<Contact />`}
                    </h1>
                </section>
                <section className="flex flex-col justify-center items-center pt-16">
                    <div className="mb-8">
                        <LinkedInLink />
                    </div>
                    <div>
                        <XLink />
                    </div>
                </section>
            </main>
        </div>
    );
};

export { Contact };

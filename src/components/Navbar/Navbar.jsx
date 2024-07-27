import React from "react";

const Navbar = () => {
    return (
        <header className='navbar shadow-lg pr-6'>
            <nav className="flex items-center justify-between w-full">
                <a href="/">
                    <img src="images/rg-logo.png" alt="Logo" className="h-20 " />
                </a>
                <div className="flex space-x-5">
                    <a href="/" className="text-white hover:underline">Home</a>
                    <a href="/about" className="text-white hover:underline">About</a>
                    <a href="/contact" className="text-white hover:underline">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export { Navbar };

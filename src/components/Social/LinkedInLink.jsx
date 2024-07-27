import React from "react";

const LinkedInLink = () => {
    return (
        <a href="//www.linkedin.com/in/rob-gill" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:underline">
            <img src="../../images/linkedin-logo.png" alt="LinkedIn Logo" className="w-60" />
        </a>
    );
};

export { LinkedInLink };
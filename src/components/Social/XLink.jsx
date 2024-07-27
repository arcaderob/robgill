import React from "react";

const XLink = ({ href, username}) => {
    return (
        <a href="//x.com/arcaderob" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:underline">
            <img src="../../images/x-logo-white.png" alt="X Logo" className="w-20" />
        </a>
    );
};

export { XLink };
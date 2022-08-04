import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="bg-babyBlue-0 w-full flex flex-col items-center">
            <Navbar />
            <div className="max-w-1920">{children}</div>
        </div>
    );
};

export default Layout;

import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="bg-babyBlue-0">
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;

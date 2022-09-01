import React from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Contact from "./Contact";
import { navbar, mobileNavbar, contact } from "../public/content";

const Layout = ({ children }) => {
    return (
        <div className="bg-babyBlue-0 w-full flex flex-col items-center text-babyBlue-1500">
            <Navbar content={navbar} />
            <div className="max-w-1920 w-full">{children}</div>
            <Contact content={contact} />
            <MobileNavbar content={mobileNavbar} />
        </div>
    );
};

export default Layout;

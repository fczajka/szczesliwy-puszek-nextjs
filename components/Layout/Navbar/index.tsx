"use client";

import Link from "next/link";
import { navbar } from "public/content";
import { headlineFont } from "public/fonts";
import { NavbarContent } from "public/interfaces";
import List from "./List";

const Navbar = () => {
    const content: NavbarContent = navbar;

    return (
        <div className="w-full h-60px relative shadow-md sm:h-80px">
            <div className="w-full h-full max-w-1920 flex my-0 mx-auto">
                <div
                    className={`w-full text-3xl flex items-center justify-center font-headline ${headlineFont.variable} sm:text-4xl lg:basis-7/12`}
                >
                    <Link href="/" scroll={false}>
                        {content.title}
                    </Link>
                </div>
                <List menu={content.menu} />
            </div>
        </div>
    );
};

export default Navbar;

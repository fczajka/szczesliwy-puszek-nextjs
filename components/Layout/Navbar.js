"use client";

import Link from "next/link";
import Submenu from "../Ui/Submenu";
import { navbar } from "../../public/content";
import { headlineFont } from "../../public/fonts";

const Navbar = () => {
    return (
        <div className="w-full h-60px relative shadow-md sm:h-80px">
            <div className="w-full h-full max-w-1920 flex my-0 mx-auto">
                <div
                    className={`w-full text-3xl flex items-center justify-center font-headline ${headlineFont.variable} sm:text-4xl lg:basis-7/12`}
                >
                    <Link href="/" scroll={false}>
                        {navbar.title}
                    </Link>
                </div>
                <ul className="hidden basis-0 h-full justify-center items-center  space-x-4 lg:flex lg:basis-5/12">
                    {navbar.menu.map((listElement) => (
                        <li key={listElement.text}>
                            {listElement.array ? (
                                <Submenu submenu={listElement} mobile={false} />
                            ) : listElement.linkTo.includes("#") ? (
                                <a href={listElement.linkTo}>
                                    {listElement.text}
                                    {listElement.icon && <listElement.icon />}
                                </a>
                            ) : (
                                <Link href={listElement.linkTo}>
                                    {listElement.text}
                                    {listElement.icon && <listElement.icon />}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

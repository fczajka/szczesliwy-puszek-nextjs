import { useState } from "react";
import { layout } from "../content";
import Link from "next/Link";
import Submenu from "./Submenu";

const Navbar = () => {
    return (
        <div className="w-full h-60px relative text-babyBlue-1500 shadow-md xsm:h-80px">
            <div className="w-full h-full max-w-1920 flex my-0 mx-auto">
                <div className="w-full text-3xl flex items-center justify-center font-titan-one xsm:text-4xl lg:basis-7/12">
                    <Link href="/">
                        <a>{layout.header.title}</a>
                    </Link>
                </div>
                <ul className="hidden w-0 h-full justify-center items-center font-radio-canada space-x-4 lg:flex lg:basis-5/12">
                    {layout.header.menu.map((listElement) => (
                        <li key={listElement.text}>
                            {listElement.array ? (
                                <Submenu submenu={listElement} />
                            ) : (
                                <Link href={listElement.linkTo}>
                                    <a>{listElement.text}</a>
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

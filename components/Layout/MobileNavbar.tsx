"use client";

import Link from "next/link";
import Submenu from "../Ui/Submenu";
import { mobileNavbar } from "public/content";

const MobileNavbar = () => {
    return (
        <div className="fixed bottom-0 w-full h-60px bg-babyBlue-0 sm:h-80px lg:hidden">
            <ul className="flex basis-full h-full justify-evenly items-center ">
                {mobileNavbar.map((listElement) => (
                    <li
                        key={listElement.text}
                        className="flex basis-1/5 justify-center"
                    >
                        {listElement.array ? (
                            <Submenu submenu={listElement} mobile={true} />
                        ) : listElement.linkTo.includes("#") ? (
                            <a
                                href={listElement.linkTo}
                                className="flex flex-col items-center"
                            >
                                {listElement.icon && <listElement.icon />}
                                {listElement.text}
                            </a>
                        ) : (
                            <Link
                                href={listElement.linkTo}
                                className="flex flex-col items-center"
                            >
                                {listElement.icon && <listElement.icon />}
                                {listElement.text}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileNavbar;

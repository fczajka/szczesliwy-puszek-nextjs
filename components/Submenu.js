import React from "react";
import Link from "next/Link";
import { useState } from "react";

const Submenu = ({ submenu }) => {
    const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);

    const onMouseEnterSubmenu = () => {
        window.innerWidth > 1024 && setIsOpenSubmenu(true);
    };

    const onMouseLeaveSubmenu = () => {
        window.innerWidth > 1024 && setIsOpenSubmenu(false);
    };

    return (
        <>
            <button
                className="flex items-center"
                aria-haspopup="menu"
                aria-expanded={isOpenSubmenu ? "true" : "false"}
                onClick={() => {
                    setIsOpenSubmenu(!isOpenSubmenu);
                }}
                onMouseEnter={onMouseEnterSubmenu}
                onMouseLeave={onMouseLeaveSubmenu}
            >
                {submenu.text}
                {submenu.icon ? <submenu.icon /> : ""}
            </button>
            <ul
                onMouseEnter={onMouseEnterSubmenu}
                onMouseLeave={onMouseLeaveSubmenu}
                className={`absolute bg-babyBlue-0 pt-6 pb-4 z-10 rounded-md shadow-md ${
                    isOpenSubmenu ? "block" : "hidden"
                }`}
            >
                {submenu.array.map((submenuElement) => (
                    <li
                        key={submenuElement.name}
                        className={
                            submenuElement.color === "royalPink"
                                ? "hover:bg-royalPink-100"
                                : "hover:bg-babyBlue-100"
                        }
                    >
                        <Link href={`${submenuElement.linkTo}`}>
                            <a className="py-0.5 px-4 block">
                                {submenuElement.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Submenu;

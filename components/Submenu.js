import React from "react";
import Link from "next/Link";
import { useState, useEffect, useRef } from "react";

const Submenu = ({ submenu, mobile }) => {
    const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
    const refSubmenu = useRef();

    const onMouseEnterSubmenu = () => {
        window.innerWidth > 1024 && setIsOpenSubmenu(true);
    };

    const onMouseLeaveSubmenu = () => {
        window.innerWidth > 1024 && setIsOpenSubmenu(false);
    };

    useEffect(() => {
        const handler = (event) => {
            if (
                isOpenSubmenu &&
                refSubmenu.current &&
                !refSubmenu.current.contains(event.target)
            ) {
                setIsOpenSubmenu(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [isOpenSubmenu]);

    return (
        <>
            <button
                ref={refSubmenu}
                className={`flex items-center ${
                    mobile ? " flex-col-reverse" : ""
                }`}
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
                className={`absolute bg-babyBlue-0 pt-6 pb-4 z-10 rounded-md shadow-md
                ${mobile ? "bottom-14" : ""}
                ${isOpenSubmenu ? "block" : "hidden"}`}
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

"use client";

import React, { MutableRefObject } from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IconType } from "react-icons";
import { SubmenuProps } from "public/interfaces";

const Submenu = ({ submenu, mobile }: SubmenuProps) => {
    const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);
    const refButton: MutableRefObject<HTMLButtonElement | null> = useRef(null);
    const refSubmenu: MutableRefObject<HTMLUListElement | null> = useRef(null);

    const onMouseEnterSubmenu = () => {
        window.innerWidth > 1024 && setIsOpenSubmenu(true);
    };

    const onMouseLeaveSubmenu = () => {
        window.innerWidth > 1024 && setIsOpenSubmenu(false);
    };

    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            if (
                isOpenSubmenu &&
                refSubmenu.current &&
                refButton.current &&
                !refButton.current.contains(event.target as Node) &&
                !refSubmenu.current.contains(event.target as Node)
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
                ref={refButton}
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
                ref={refSubmenu}
                onMouseEnter={onMouseEnterSubmenu}
                onMouseLeave={onMouseLeaveSubmenu}
                className={`absolute bg-babyBlue-0 pt-4 pb-4 z-10 rounded-md shadow-md
                ${mobile ? "bottom-16" : ""}
                ${isOpenSubmenu ? "block" : "hidden"}`}
            >
                {submenu.array &&
                    submenu.array.map((submenuElement) => (
                        <li
                            key={submenuElement.name}
                            className={
                                submenuElement.color === "royalPink"
                                    ? "hover:bg-royalPink-100"
                                    : "hover:bg-babyBlue-100"
                            }
                        >
                            <Link
                                href={`${submenuElement.linkTo}`}
                                className="py-0.5 px-4 block"
                                onClick={() => {
                                    setIsOpenSubmenu(!isOpenSubmenu);
                                }}
                            >
                                {submenuElement.name}
                            </Link>
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default Submenu;

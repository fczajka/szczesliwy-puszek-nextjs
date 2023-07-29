"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { SubmenuProps } from "@/public/interfaces";
import { Colors } from "@/public/enums";
import {
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMovement,
} from "public/helpers";
import { MutableButtonRefNull, MutableUListRefNull } from "public/types";

const Submenu = ({ submenu, mobile }: SubmenuProps) => {
    const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);
    const refButton: MutableButtonRefNull = useRef(null);
    const refSubmenu: MutableUListRefNull = useRef(null);

    const onMouseEnterSubmenu = handleMouseEnter(setIsOpenSubmenu);
    const onMouseLeaveSubmenu = handleMouseLeave(setIsOpenSubmenu);

    useEffect(() => {
        return handleMouseMovement(
            isOpenSubmenu,
            setIsOpenSubmenu,
            refButton,
            refSubmenu
        );
    }, [isOpenSubmenu]);

    return (
        <>
            <button
                ref={refButton}
                className={`flex items-center ${mobile && " flex-col-reverse"}`}
                aria-haspopup="menu"
                aria-expanded={isOpenSubmenu ? "true" : "false"}
                onClick={() => {
                    setIsOpenSubmenu(!isOpenSubmenu);
                }}
                onMouseEnter={onMouseEnterSubmenu}
                onMouseLeave={onMouseLeaveSubmenu}
            >
                {submenu.text}
                {submenu.icon && <submenu.icon />}
            </button>
            <ul
                ref={refSubmenu}
                onMouseEnter={onMouseEnterSubmenu}
                onMouseLeave={onMouseLeaveSubmenu}
                className={`absolute bg-babyBlue-0 pt-4 pb-4 z-10 rounded-md shadow-md
                ${mobile && "bottom-16"}
                ${isOpenSubmenu ? "block" : "hidden"}`}
            >
                {submenu.array &&
                    submenu.array.map((submenuElement) => (
                        <li
                            key={submenuElement.name}
                            className={
                                submenuElement.color === Colors.pink
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

import { useState } from "react";
import { layout } from "../content";
import Link from "next/Link";
import Submenu from "./Submenu";

const Navbar = () => {
    const [isOpenDogs, setIsOpenDogs] = useState(false);
    const [isOpenLitters, setIsOpenLitters] = useState(false);

    const onMouseEnterDogs = () => {
        window.innerWidth > 1024 && setIsOpenDogs(true);
    };

    const onMouseLeaveDogs = () => {
        window.innerWidth > 1024 && setIsOpenDogs(false);
    };

    const onMouseEnterLitters = () => {
        window.innerWidth > 1024 && setIsOpenLitters(true);
    };

    const onMouseLeaveLitters = () => {
        window.innerWidth > 1024 && setIsOpenLitters(false);
    };

    return (
        <div className="w-full h-60px flex items-center justify-center relative text-babyBlue-1500 shadow-md xsm:h-80px">
            <div className="w-full h-full max-w-1920 flex">
                <div className="w-full text-3xl flex items-center justify-center font-titan-one xsm:text-4xl lg:w-7/12">
                    <Link href="/">
                        <a>{layout.header.title}</a>
                    </Link>
                </div>
                <ul className="hidden w-0 h-full justify-center items-center font-radio-canada space-x-4 lg:w-5/12 lg:flex">
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

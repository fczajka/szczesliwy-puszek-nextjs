import { mobileNavbar } from "../public/content";
import Link from "next/Link";
import Submenu from "./Submenu";

const MobileNavbar = () => {
    return (
        <div className="fixed bottom-0 w-full h-60px bg-babyBlue-0 sm:h-80px lg:hidden">
            <ul className="flex basis-full h-full justify-evenly items-center font-radio-canada">
                {mobileNavbar.map((listElement) => (
                    <li
                        key={listElement.text}
                        className="flex basis-1/5 justify-center"
                    >
                        {listElement.array ? (
                            <Submenu submenu={listElement} mobile={true} />
                        ) : (
                            <Link href={listElement.linkTo}>
                                <a className="flex flex-col items-center">
                                    {listElement.icon ? (
                                        <listElement.icon />
                                    ) : (
                                        ""
                                    )}
                                    {listElement.text}
                                </a>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileNavbar;

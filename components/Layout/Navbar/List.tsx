import Submenu from "@/components/Ui/Submenu";
import Link from "next/link";
import { MenuProps } from "public/interfaces";

const Navbar = ({ menu }: MenuProps) => {
    return (
        <ul className="hidden basis-0 h-full justify-center items-center  space-x-4 lg:flex lg:basis-5/12">
            {menu.map((listElement) => (
                <li key={listElement.text}>
                    {listElement.array ? (
                        <Submenu submenu={listElement} mobile={false} />
                    ) : listElement.linkTo ? (
                        listElement.linkTo.includes("#") ? (
                            <a href={listElement.linkTo}>
                                {listElement.text}
                                {listElement.icon && <listElement.icon />}
                            </a>
                        ) : (
                            <Link href={listElement.linkTo}>
                                {listElement.text}
                                {listElement.icon && <listElement.icon />}
                            </Link>
                        )
                    ) : null}
                </li>
            ))}
        </ul>
    );
};

export default Navbar;

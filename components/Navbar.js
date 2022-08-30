import Link from "next/link";
import Submenu from "./Submenu";

const Navbar = ({ content }) => {
    return (
        <div className="w-full h-60px relative shadow-md sm:h-80px">
            <div className="w-full h-full max-w-1920 flex my-0 mx-auto">
                <div className="w-full text-3xl flex items-center justify-center font-titan-one sm:text-4xl lg:basis-7/12">
                    <Link href="/">
                        <a>{content.title}</a>
                    </Link>
                </div>
                <ul className="hidden basis-0 h-full justify-center items-center font-radio-canada space-x-4 lg:flex lg:basis-5/12">
                    {content.menu.map((listElement) => (
                        <li key={listElement.text}>
                            {listElement.array ? (
                                <Submenu submenu={listElement} mobile={false} />
                            ) : (
                                <Link href={listElement.linkTo}>
                                    <a>
                                        {listElement.text}
                                        {listElement.icon ? (
                                            <listElement.icon />
                                        ) : (
                                            ""
                                        )}
                                    </a>
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

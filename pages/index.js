import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slide from "../components/Slide";
import WhyUs from "../components/WhyUs";
import { slider } from "../content";

const Home = ({ content }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === 2) {
            setIndex(0);
        } else if (index == -1) {
            setIndex(1);
        }
    }, [index]);

    useEffect(() => {
        const change = setTimeout(
            () => setIndex(index !== 2 ? index + 1 : index === 3 ? 0 : ""),
            12000
        );
        return () => clearTimeout(change);
    }, [index]);

    return (
        <>
            <div className="relative overflow-hidden h-full">
                <ul className="absolute w-full flex justify-center bottom-20 z-10">
                    <li className="mx-6 rounded-full text-babyBlue-100 bg-babyBlue-1500 transition duration-300 ease-in-out hover:bg-babyBlue-200 hover:text-babyBlue-1500">
                        <button
                            className="p-3 rounded-full"
                            onClick={() => setIndex(index - 1)}
                        >
                            <IoIosArrowBack className="w-4 h-4" />
                        </button>
                    </li>
                    <li className="mx-6 rounded-full text-babyBlue-100 bg-babyBlue-1500 transition duration-300 ease-in-out hover:bg-babyBlue-200 hover:text-babyBlue-1500">
                        <button
                            className="p-3 rounded-full"
                            onClick={() => setIndex(index + 1)}
                        >
                            <IoIosArrowForward className="w-4 h-4" />
                        </button>
                    </li>
                </ul>
                <div
                    className={`h-screen-base flex scroll-smooth transition duration-1000 ease-in-out sm:h-screen-sm lg:h-screen-lg ${
                        index === 0 ? "translate-x-0" : "translate-x-100"
                    }`}
                >
                    {content.map((slide) => (
                        <Slide key={slide.bgPhoto} content={slide} />
                    ))}
                </div>
            </div>
            <WhyUs />
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {
            content: slider.slides,
        },
    };
}

export default Home;

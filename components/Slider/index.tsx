"use client";

import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slide from "./Slide";
import { slider } from "public/content";
import {
    outOfSlider,
    sliderEnd,
    sliderMiddle,
    sliderStart,
    timeToNextSlide,
} from "public/constants";

const Slider = () => {
    const [index, setIndex] = useState(sliderStart);

    useEffect(() => {
        if (index === sliderEnd) {
            setIndex(sliderStart);
        } else if (index == outOfSlider) {
            setIndex(sliderMiddle);
        }
    }, [index]);

    useEffect(() => {
        const change = setTimeout(
            () => setIndex(index === sliderEnd ? sliderStart : index + 1),
            timeToNextSlide
        );
        return () => clearTimeout(change);
    }, [index]);

    return (
        <div className="relative overflow-hidden h-full">
            <ul className="absolute w-full flex justify-center bottom-20 z-10">
                <li className="mx-6 rounded-full text-babyBlue-100 bg-babyBlue-1500 transition duration-300 ease-in-out hover:bg-babyBlue-200 hover:text-babyBlue-1500">
                    <button
                        aria-label="Wstecz"
                        className="p-3 rounded-full"
                        onClick={() => setIndex(index - 1)}
                    >
                        <IoIosArrowBack className="w-4 h-4" />
                    </button>
                </li>
                <li className="mx-6 rounded-full text-babyBlue-100 bg-babyBlue-1500 transition duration-300 ease-in-out hover:bg-babyBlue-200 hover:text-babyBlue-1500">
                    <button
                        aria-label="Naprzód"
                        className="p-3 rounded-full"
                        onClick={() => setIndex(index + 1)}
                    >
                        <IoIosArrowForward className="w-4 h-4" />
                    </button>
                </li>
            </ul>
            <div
                className={`relative h-screen-base flex scroll-smooth transition duration-1000 ease-in-out sm:h-screen-sm lg:h-screen-lg ${
                    index === 0 ? "translate-x-0" : "translate-x-100"
                }`}
            >
                {slider.slides.map((slide) => (
                    <Slide key={slide.headline} slider={slide} />
                ))}
            </div>
        </div>
    );
};

export default Slider;

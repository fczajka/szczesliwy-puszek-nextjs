"use client";

import { useEffect, useState } from "react";
import Slide from "./Slide";
import { slider } from "@/public/content";
import {
    outOfSlider,
    sliderEnd,
    sliderMiddle,
    sliderStart,
    timeToNextSlide,
} from "public/constants";
import Controls from "./Controls";

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
            <Controls setIndex={setIndex} index={index} />
            <div
                className={`relative h-screen-base flex scroll-smooth transition duration-1000 ease-in-out sm:h-screen-sm lg:h-screen-lg  motion-reduce:transition-none ${
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

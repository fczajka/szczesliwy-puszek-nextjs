"use client";

import { ControlsProps } from "@/public/interfaces";
import { sliderControls } from "@/public/content";

const Controls = ({ setIndex, index }: ControlsProps) => {
    return (
        <ul className="absolute w-full flex justify-center bottom-20 z-10">
            {sliderControls.map((control) => (
                <li
                    key={control.aria}
                    className="mx-6 rounded-full text-babyBlue-100 bg-babyBlue-1500 transition duration-300 ease-in-out hover:bg-babyBlue-200 hover:text-babyBlue-1500 motion-reduce:transition-none"
                >
                    <button
                        aria-label={control.aria}
                        className="p-3 rounded-full"
                        onClick={() => setIndex(index - 1)}
                    >
                        <control.icon className="w-4 h-4" />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Controls;

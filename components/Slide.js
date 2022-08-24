import { useState, useEffect } from "react";
import Button from "./Button";

const Slide = ({ content }) => {
    const {
        bgPhoto,
        bgPosition,
        headline,
        subline,
        anchorText,
        anchorColor,
        linkTo,
    } = content;

    return (
        <div
            className={`w-full h-full flex-grow flex-shrink-0 basis-full ${
                bgPhoto === "bg-landing-photo-1"
                    ? "bg-landing-photo-1"
                    : "bg-landing-photo-2"
            } ${
                bgPosition === "bg-l-50-30" ? "bg-l-50-30" : "bg-center"
            } bg-cover bg-no-repeat`}
        >
            <div className="w-full h-full font-radio-canada text-babyBlue-1500 inline-flex flex-col justify-center items-center lg:w-fit lg:ml-16 lg:text-babyBlue-0">
                <h2 className="text-3xl sm:text-4xl">{headline}</h2>
                <h3 className="text-lg my-2 mb-4 sm:text-xl">{subline}</h3>
                <Button
                    type="anchor"
                    text={anchorText}
                    color={anchorColor}
                    link={linkTo}
                />
            </div>
        </div>
    );
};

export default Slide;

import { css } from "@emotion/react";
import Image from "next/image";
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
        <div className="w-full h-full relative flex-grow flex-shrink-0 basis-full">
            <Image
                src={bgPhoto}
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition={bgPosition}
                priority
            />
            <div className="absolute w-full h-full font-radio-canada text-babyBlue-1500 inline-flex flex-col justify-center items-center lg:w-fit lg:ml-16 lg:text-babyBlue-0">
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

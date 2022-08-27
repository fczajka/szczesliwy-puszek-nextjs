import Image from "next/image";
import Button from "./Button";

const WhyUs = ({ photo, headline, text, buttonText }) => {
    return (
        <div
            id="whyUs"
            className="relative w-256 h-104 bg-babyBlue-100 rounded-md mt-12 transition-all hover:scale-105"
        >
            <div className="relative h-1/2">
                <Image
                    className="rounded-t-md"
                    src={photo}
                    alt="test"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-4 text-babyBlue-1500">
                <h3 className="font-titan-one tracking-wide mb-2">
                    {headline}
                </h3>
                <p className="font-radio-canada text-sm leading-relaxed text-justify">
                    {text}
                </p>
            </div>
            <div className="absolute bottom-4 left-4">
                <Button
                    type="anchor"
                    text={buttonText}
                    color="royalPink"
                    link="/"
                />
            </div>
        </div>
    );
};

export default WhyUs;

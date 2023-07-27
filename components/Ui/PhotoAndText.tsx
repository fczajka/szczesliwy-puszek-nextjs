import Image from "next/image";
import Button from "./Button";
import { headlineFont } from "public/fonts";
import { PhotoAndTextProps } from "public/interfaces";

const PhotoAndText = ({
    headline,
    image,
    alt,
    text,
    buttonInfo,
}: PhotoAndTextProps) => {
    return (
        <div className="w-full flex flex-col my-4 lg:w-9/12 lg:odd:flex-row-reverse lg:even:flex-row">
            <div className="relative w-full h-72 lg:w-1/2 lg:m-4 md:h-96 xl:h-104">
                <Image className="object-cover h-full" src={image} alt={alt} />
            </div>
            <div className="w-full flex flex-col items-start lg:w-1/2 lg:m-4">
                <h3
                    className={`font-headline ${headlineFont.variable} mt-4 text-2xl sm:text-3xl lg:mt-0`}
                >
                    {headline}
                </h3>
                <p className="text-sm leading-relaxed text-justify my-4 md:text-base lg:text-lg">
                    {text}
                </p>
                {buttonInfo && (
                    <Button
                        type={buttonInfo.type}
                        text={buttonInfo.text}
                        color={buttonInfo.color}
                        link={buttonInfo.link}
                    />
                )}
            </div>
        </div>
    );
};

export default PhotoAndText;

import Image from "next/image";
import Button from "./Button";

const PhotoAndText = ({ headline, image, text, buttonInfo }) => {
    return (
        <div className="w-full flex flex-col my-4 lg:w-9/12 lg:odd:flex-row-reverse lg:even:flex-row">
            <div className="relative w-full h-72 lg:w-1/2 lg:m-4 md:h-96 xl:h-104">
                <Image src={image} layout="fill" objectFit="cover" />
            </div>
            <div className="w-full flex flex-col items-start lg:w-1/2 lg:m-4">
                <h3 className="font-titan-one mt-4 text-2xl sm:text-3xl lg:mt-0">
                    {headline}
                </h3>
                <p className="font-radio-canada text-sm leading-relaxed text-justify my-4 md:text-base lg:text-lg">
                    {text}
                </p>
                {buttonInfo ? (
                    <Button
                        type={buttonInfo.type}
                        text={buttonInfo.text}
                        color={buttonInfo.color}
                        link={buttonInfo.link}
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default PhotoAndText;

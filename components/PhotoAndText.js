import Image from "next/image";
import Button from "./Button";

const PhotoAndText = ({ headline, image, text, buttonInfo }) => {
    return (
        <div className="w-9/12 flex my-4 odd:flex-row-reverse">
            <div className="relative w-1/2 m-4 h-104">
                <Image src={image} layout="fill" objectFit="cover" />
            </div>
            <div className="w-1/2 h-80 m-4 flex flex-col items-start">
                <h3 className="font-titan-one text-2xl sm:text-3xl">
                    {headline}
                </h3>
                <p className="font-radio-canada text-lg leading-relaxed text-justify my-4">
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

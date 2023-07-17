import Image from "next/image";
import Button from "./Button";
import PhotoAndTextWrapper from "./PhotoAndTextWrapper";
import { headlineFont } from "../public/fonts";

const OurDogsDetails = ({ content }) => {
    return (
        <PhotoAndTextWrapper bgInfo={false}>
            <div className="w-full flex flex-col my-4 lg:w-9/12 lg:odd:flex-row-reverse lg:even:flex-row">
                <div className="relative w-full lg:w-1/2 lg:m-4">
                    <Image
                        className="w-full object-cover h-72 md:h-96 xl:h-104"
                        src={content.photo}
                        alt={content.alt}
                    />
                </div>
                <div className="w-full flex flex-col items-start lg:w-1/2 lg:m-4">
                    <h2
                        className={`font-headline ${headlineFont.variable} mt-4 text-2xl sm:text-3xl lg:mt-0`}
                    >
                        {content.name}
                    </h2>
                    <h3 className="text-base sm:text-lg lg:mt-4">
                        {content.firstLine}
                    </h3>
                    <p className="text-sm leading-relaxed text-justify md:text-base lg:text-lg">
                        {content.text}
                    </p>
                    {content.addText ? (
                        <h4 className="text-base sm:text-lg">
                            {content.addText}
                        </h4>
                    ) : (
                        ""
                    )}
                    <ul className="leading-relaxed text-sm my-4 md:text-base lg:text-lg">
                        {content.params.map((param) => (
                            <li
                                key={param.key}
                            >{`${param.key}: ${param.value}`}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {content.buttonInfo && (
                <Button
                    type={content.buttonInfo.type}
                    text={content.buttonInfo.text}
                    color={content.buttonInfo.color}
                    link={content.buttonInfo.link}
                />
            )}
        </PhotoAndTextWrapper>
    );
};

export default OurDogsDetails;

import Image from "next/image";
import Button from "./Button";
import PhotoAndTextWrapper from "./PhotoAndTextWrapper";

const OurDogsDetails = ({ content }) => {
    return (
        <PhotoAndTextWrapper bgInfo={false}>
            <div className="w-full flex flex-col my-4 lg:w-9/12 lg:odd:flex-row-reverse lg:even:flex-row">
                <div className="relative w-full h-72 lg:w-1/2 lg:m-4 md:h-96 xl:h-104">
                    <Image
                        src={content.photo}
                        alt={content.alt}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full flex flex-col items-start lg:w-1/2 lg:m-4">
                    <h2 className="font-titan-one mt-4 text-2xl sm:text-3xl lg:mt-0">
                        {content.name}
                    </h2>
                    <h3 className="font-radio-canada text-base sm:text-lg lg:mt-4">
                        {content.firstLine}
                    </h3>
                    <p className="font-radio-canada text-sm leading-relaxed text-justify md:text-base lg:text-lg">
                        {content.text}
                    </p>
                    {content.addText ? (
                        <h4 className="font-radio-canada text-base sm:text-lg">
                            {content.addText}
                        </h4>
                    ) : (
                        ""
                    )}
                    <ul className="font-radio-canada leading-relaxed text-sm my-4 md:text-base lg:text-lg">
                        {content.params.map((param) => (
                            <li
                                key={param.key}
                            >{`${param.key}: ${param.value}`}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {content.buttonInfo ? (
                <Button
                    type={content.buttonInfo.type}
                    text={content.buttonInfo.text}
                    color={content.buttonInfo.color}
                    link={content.buttonInfo.link}
                />
            ) : (
                ""
            )}
        </PhotoAndTextWrapper>
    );
};

export default OurDogsDetails;

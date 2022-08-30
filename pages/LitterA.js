import Image from "next/image";
import PhotoAndText from "../components/PhotoAndText";
import PhotoAndTextWrapper from "../components/PhotoAndTextWrapper";
import Button from "../components/Button";
import { litterA as litter } from "../public/content";

const LitterA = ({ content }) => {
    return (
        <PhotoAndTextWrapper bgInfo={litter.backgroundInfo}>
            {litter.dogs.map((dog) => (
                <PhotoAndText
                    key={dog.name}
                    headline={dog.name}
                    image={dog.image}
                    alt={dog.alt}
                    text={dog.description}
                />
            ))}
            <div className="w-full flex flex-col items-center lg:w-9/12 lg:p-4">
                <h3 className="font-titan-one text-2xl my-4 sm:text-3xl">
                    {content.parents.headline}
                </h3>
                <p className="font-radio-canada text-sm leading-relaxed text-justify my-4 md:text-base lg:text-lg">
                    {content.parents.description}
                </p>
                <div className="w-full flex flex-col sm:flex-row">
                    {content.parents.dogs.map((dog) => (
                        <div
                            key={dog.name}
                            className="w-full flex flex-col items-center my-2 md:w-1/2 sm:odd:mr-1 sm:even:ml-1 md:odd:mr-2 md:even:ml-2 lg:odd:mr-4 lg:even:ml-4"
                        >
                            <h4 className="font-titan-one text-xl sm:text-2xl md:my-4">
                                {dog.name}
                            </h4>
                            <div className="relative w-full h-72 md:h-96 xl:h-104">
                                <Image
                                    src={dog.photo}
                                    alt={dog.alt}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Button
                type={content.buttonInfo.type}
                text={content.buttonInfo.text}
                color={content.buttonInfo.color}
                link={content.buttonInfo.link}
            />
        </PhotoAndTextWrapper>
    );
};

export function getStaticProps() {
    return {
        props: {
            content: litter,
        },
    };
}

export default LitterA;

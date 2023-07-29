import Image from "next/image";
import { litterA as litter } from "@/public/content";
import { headlineFont } from "@/public/fonts";
import PhotoAndTextWrapper from "@/components/Ui/PhotoAndTextWrapper";
import PhotoAndText from "@/components/Ui/PhotoAndText";
import Button from "@/components/Ui/Button";

const LitterA = () => {
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
                <h3
                    className={`font-headline ${headlineFont.variable} text-2xl my-4 sm:text-3xl`}
                >
                    {litter.parents.headline}
                </h3>
                <p className="text-sm leading-relaxed text-justify my-4 md:text-base lg:text-lg">
                    {litter.parents.description}
                </p>
                <div className="w-full flex flex-col sm:flex-row">
                    {litter.parents.dogs.map((dog) => (
                        <div
                            key={dog.name}
                            className="w-full flex flex-col items-center my-2 md:w-1/2 sm:odd:mr-1 sm:even:ml-1 md:odd:mr-2 md:even:ml-2 lg:odd:mr-4 lg:even:ml-4"
                        >
                            <h4
                                className={`font-headline ${headlineFont.variable} text-xl sm:text-2xl md:my-4`}
                            >
                                {dog.name}
                            </h4>
                            <div className="relative w-full h-72 md:h-96 xl:h-104">
                                <Image
                                    className="object-cover h-full"
                                    src={dog.photo}
                                    alt={dog.alt}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <Button
                    type={litter.buttonInfo.type}
                    text={litter.buttonInfo.text}
                    color={litter.buttonInfo.color}
                    link={litter.buttonInfo.link}
                />
            </div>
        </PhotoAndTextWrapper>
    );
};

export default LitterA;

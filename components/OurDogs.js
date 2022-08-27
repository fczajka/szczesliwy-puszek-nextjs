import Image from "next/image";
import Button from "./Button";
import PhotoAndText from "./PhotoAndText";
import William from "../public/images/index/William.webp";
import { ourDogs } from "../public/content";

const OurDogs = () => {
    return (
        <div className="w-full flex flex-col items-center pb-10 bg-dogs bg-center bg-no-repeat md:px-20 2xl:px-28">
            <h2 className="my-16 font-titan-one text-babyBlue-1500 text-3xl sm:text-4xl">
                {ourDogs.title}
            </h2>
            {ourDogs.dogs.map((dog) => (
                <PhotoAndText
                    key={dog.headline}
                    headline={dog.headline}
                    image={dog.image}
                    text={dog.text}
                    buttonInfo={dog.buttonInfo}
                />
            ))}
        </div>
    );
};

export default OurDogs;

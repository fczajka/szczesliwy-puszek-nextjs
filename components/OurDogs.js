import PhotoAndText from "./PhotoAndText";
import { ourDogs } from "../public/content";

const OurDogs = () => {
    return (
        <div className="w-full flex flex-col items-center pb-10 bg-dogs bg-top bg-no-repeat px-2 sm:px-32 lg:px-0 lg:bg-center xl:px-2 2xl:px-28">
            <h2 className="my-16 font-titan-one text-babyBlue-1500 text-3xl sm:text-4xl">
                {ourDogs.title}
            </h2>
            {ourDogs.dogs.map((dog) => (
                <PhotoAndText
                    key={dog.headline}
                    headline={dog.headline}
                    image={dog.image}
                    alt={dog.alt}
                    text={dog.text}
                    buttonInfo={dog.buttonInfo}
                />
            ))}
        </div>
    );
};

export default OurDogs;

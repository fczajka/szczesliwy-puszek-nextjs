import PhotoAndText from "./PhotoAndText";
import PhotoAndTextWrapper from "./PhotoAndTextWrapper";
import { ourDogs } from "../public/content";

const OurDogs = () => {
    return (
        <PhotoAndTextWrapper bgInfo={ourDogs.backgroundInfo}>
            <h2 className="my-16 font-titan-one text-babyBlue-1500 text-3xl sm:text-4xl">
                {ourDogs.title}
            </h2>
            {ourDogs.dogs.map((dog) => (
                <PhotoAndText
                    key={dog.headline}
                    headline={dog.name}
                    image={dog.image}
                    alt={dog.alt}
                    text={dog.text}
                    buttonInfo={dog.buttonInfo}
                />
            ))}
        </PhotoAndTextWrapper>
    );
};

export default OurDogs;

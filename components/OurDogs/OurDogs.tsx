import { headlineFont } from "@/public/fonts";
import { ourDogs } from "@/public/content";
import PhotoAndTextWrapper from "../Ui/PhotoAndTextWrapper";
import PhotoAndText from "../Ui/PhotoAndText";

const OurDogs = () => {
    return (
        <PhotoAndTextWrapper bgInfo={ourDogs.backgroundInfo}>
            <h2
                className={`my-16 font-headline ${headlineFont.variable} text-babyBlue-1500 text-3xl sm:text-4xl`}
            >
                {ourDogs.title}
            </h2>
            {ourDogs.dogs.map((dog) => (
                <PhotoAndText
                    key={dog.name}
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

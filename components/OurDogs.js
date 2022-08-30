import PhotoAndText from "./PhotoAndText";
import PhotoAndTextWrapper from "./PhotoAndTextWrapper";

const OurDogs = ({ content }) => {
    return (
        <PhotoAndTextWrapper bgInfo={content.backgroundInfo}>
            <h2 className="my-16 font-titan-one text-babyBlue-1500 text-3xl sm:text-4xl">
                {content.title}
            </h2>
            {content.dogs.map((dog) => (
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

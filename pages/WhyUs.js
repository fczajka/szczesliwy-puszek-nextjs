import PhotoAndText from "../components/PhotoAndText";
import PhotoAndTextWrapper from "../components/PhotoAndTextWrapper";
import Button from "../components/Button";
import { whyUsDetails } from "../public/content";

const WhyUs = () => {
    return (
        <PhotoAndTextWrapper bgInfo={false}>
            {whyUsDetails.sections.map((section) => (
                <PhotoAndText
                    key={section.headline}
                    headline={section.headline}
                    image={section.image}
                    alt={section.alt}
                    text={section.text}
                />
            ))}

            <Button
                type={whyUsDetails.buttonInfo.type}
                text={whyUsDetails.buttonInfo.text}
                color={whyUsDetails.buttonInfo.color}
                link={whyUsDetails.buttonInfo.link}
            />
        </PhotoAndTextWrapper>
    );
};

export default WhyUs;

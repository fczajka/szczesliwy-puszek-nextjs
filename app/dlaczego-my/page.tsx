import Button from "@/components/Ui/Button";
import PhotoAndText from "@/components/Ui/PhotoAndText";
import PhotoAndTextWrapper from "@/components/Ui/PhotoAndTextWrapper";
import { whyUsDetails } from "public/content";

const WhyUs = () => {
    return (
        <PhotoAndTextWrapper bgInfo={whyUsDetails.backgroundInfo}>
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

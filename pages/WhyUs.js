import PhotoAndText from "../components/PhotoAndText";
import PhotoAndTextWrapper from "../components/PhotoAndTextWrapper";
import Button from "../components/Button";
import { whyUsDetails } from "../public/content";

const WhyUs = ({ content }) => {
    return (
        <PhotoAndTextWrapper bgInfo={content.backgroundInfo}>
            {content.sections.map((section) => (
                <PhotoAndText
                    key={section.headline}
                    headline={section.headline}
                    image={section.image}
                    alt={section.alt}
                    text={section.text}
                />
            ))}

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
            content: whyUsDetails,
        },
    };
}

export default WhyUs;

import OurDogsDetails from "../components/OurDogsDetails";
import { William as WilliamInfo } from "../public/content";

const William = ({ content }) => {
    return <OurDogsDetails content={content} />;
};

export function getStaticProps() {
    return {
        props: {
            content: WilliamInfo,
        },
    };
}

export default William;

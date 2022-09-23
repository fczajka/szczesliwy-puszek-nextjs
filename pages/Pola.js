import OurDogsDetails from "../components/OurDogsDetails";
import { Pola as PolaInfo } from "../public/content";

const Pola = ({ content }) => {
    return <OurDogsDetails content={content} />;
};

export function getStaticProps() {
    return {
        props: {
            content: PolaInfo,
        },
    };
}

export default Pola;

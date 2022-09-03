import WhyUs from "../components/WhyUs";
import OurDogs from "../components/OurDogs";
import Slider from "../components/Slider";
import { slider, whyUs, ourDogs } from "../public/content";

const Home = ({ slider, whyUsSection, ourDogsSection }) => {
    return (
        <>
            <Slider content={slider} />
            <WhyUs content={whyUsSection} />
            <OurDogs content={ourDogsSection} />
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {
            slider: slider.slides,
            whyUsSection: whyUs,
            ourDogsSection: ourDogs,
        },
    };
}

export default Home;

import { useState, useEffect, useContext } from "react";
import WhyUs from "../components/WhyUs";
import OurDogs from "../components/OurDogs";
import Slider from "../components/Slider";
import Context from "../components/Context";
import { slider, whyUs, ourDogs } from "../public/content";

const Home = ({ slider, whyUsSection, ourDogsSection, env }) => {
    const [localEnv, setLocalEnv] = useState(env);
    const [context, setContext] = useContext(Context);

    useEffect(() => {
        setContext(localEnv);
    }, [localEnv]);

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
            env: {
                serviceId: process.env.SERVICE_ID,
                templateId: process.env.TEMPLATE_ID,
                keyId: process.env.PUBLIC_KEY,
            },
        },
    };
}

export default Home;

import { Pola as PolaInfo } from "../public/content";

const Pola = ({ content }) => {
    return (
        <div className="w-full h-60px flex items-center justify-center relative text-babyBlue-1500">
            Pola
        </div>
    );
};

export function getStaticProps() {
    return {
        props: {
            content: PolaInfo,
        },
    };
}

export default Pola;

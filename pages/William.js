import { William as WilliamInfo } from "../public/content";

const William = ({ content }) => {
    return (
        <div className="w-full h-60px flex items-center justify-center relative text-babyBlue-1500">
            William
        </div>
    );
};

export function getStaticProps() {
    return {
        props: {
            content: WilliamInfo,
        },
    };
}

export default William;

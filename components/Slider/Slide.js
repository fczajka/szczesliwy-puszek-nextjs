import Image from "next/image";
import Button from "../Ui/Button";

const Slide = ({ slider }) => {
    const { bgPhoto, headline, subline, anchorText, anchorColor, linkTo } =
        slider;

    return (
        <div className="w-full h-full relative flex-grow flex-shrink-0 basis-full">
            <Image
                className={`w-full h-full object-cover ${
                    linkTo === "/William"
                        ? `[object-position:50%_30%]`
                        : `[object-position:center]`
                }`}
                src={bgPhoto}
                alt=""
                priority
            />
            <div className="absolute w-full text-babyBlue-1500 inline-flex flex-col items-center top-1/2 -translate-y-1/2 lg:left-16 lg:w-fit lg:text-babyBlue-0">
                <h2 className="text-3xl sm:text-4xl">{headline}</h2>
                <h3 className="text-lg my-2 mb-4 sm:text-xl">{subline}</h3>
                <Button
                    type="anchor"
                    text={anchorText}
                    color={anchorColor}
                    link={linkTo}
                />
            </div>
        </div>
    );
};

export default Slide;

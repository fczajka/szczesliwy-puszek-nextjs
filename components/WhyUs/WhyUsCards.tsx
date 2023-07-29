import Image from "next/image";
import Button from "@/components/Ui/Button";
import { headlineFont } from "@/public/fonts";
import { WhyUsCardsProps } from "@/public/interfaces";
import { ButtonTypes, Colors } from "@/public/enums";
import { whyUsAltText } from "@/public/constants";

const WhyUs = ({ photo, headline, text, buttonText }: WhyUsCardsProps) => {
    return (
        <div className="relative w-256 h-104 bg-babyBlue-100 rounded-md mt-12 transition-all shadow-md shadow-babyBlue-200 hover:scale-105">
            <div className="relative h-1/2">
                <Image
                    className="object-cover h-full rounded-t-md"
                    src={photo}
                    alt={whyUsAltText}
                />
            </div>
            <div className="p-4 text-babyBlue-1500">
                <h3 className={`font-headline ${headlineFont.variable} mb-2`}>
                    {headline}
                </h3>
                <p className=" text-sm leading-relaxed text-justify">{text}</p>
            </div>
            <div className="absolute bottom-4 left-4">
                <Button
                    type={ButtonTypes.anchor}
                    text={buttonText}
                    color={Colors.pink}
                    link="/dlaczego-my"
                />
            </div>
        </div>
    );
};

export default WhyUs;

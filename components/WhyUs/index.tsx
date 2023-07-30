import WhyUsCards from "./WhyUsCards";
import { headlineFont } from "@/public/fonts";
import { whyUs } from "@/public/content";

const WhyUs = () => {
    return (
        <div
            id="whyUs"
            className="w-full flex flex-col items-center bg-why-us bg-no-repeat md:px-20 2xl:px-28"
        >
            <h2
                className={`my-16 mb-4 font-headline ${headlineFont.variable} text-royalPink-1500 text-3xl sm:text-4xl`}
            >
                {whyUs.title}
            </h2>
            <div className="w-full flex flex-col xl:flex-row">
                {whyUs.cards.map((column) => (
                    <div
                        key={column.side}
                        className="md:w-full md:flex px-4 sm:px-32 md:px-0 md:justify-around"
                    >
                        {column.columns.map((card) => (
                            <WhyUsCards
                                key={card.headline}
                                photo={card.photo}
                                headline={card.headline}
                                text={card.text}
                                buttonText={card.buttonText}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyUs;

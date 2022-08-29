import Link from "next/Link";

const Button = ({ type, text, color, link }) => {
    return (
        <div
            className={`rounded-md font-radio-canada ${
                color === "babyBlue" ? "text-babyBlue-0" : "text-royalPink-50"
            } ${
                color === "babyBlue" ? "bg-babyBlue-400" : "bg-royalPink-400"
            } ${
                color === "babyBlue"
                    ? "border-babyBlue-600"
                    : "border-royalPink-600"
            } border-b-4 cursor-pointer hover:border-b-0 hover:translate-y-1 hover:mb-1`}
        >
            {type === "button" ? (
                <button className="block px-3 py-2 text-sm font-bold tracking-wider">
                    {text}
                </button>
            ) : (
                <Link href={link}>
                    <a className="block px-3 py-2 text-sm font-bold tracking-wider">
                        {text}
                    </a>
                </Link>
            )}
        </div>
    );
};

export default Button;

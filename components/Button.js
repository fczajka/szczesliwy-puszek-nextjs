import Link from "next/link";

const Button = ({ type, text, color, link }) => {
    return (
        <div
            className={`rounded-md font-radio-canada ${
                color === "babyBlue"
                    ? "text-babyBlue-1500"
                    : "text-royalPink-1500"
            } ${
                color === "babyBlue" ? "bg-babyBlue-300" : "bg-royalPink-300"
            } ${
                color === "babyBlue"
                    ? "border-babyBlue-700"
                    : "border-royalPink-700"
            } border-b-4 cursor-pointer hover:border-b-0 text-sm font-bold hover:translate-y-1 hover:mb-1`}
        >
            {type === "submit" ? (
                <button type="submit" className="w-full text-center px-3 py-5">
                    {text}
                </button>
            ) : (
                <Link href={link}>
                    <a className="block w-full text-center px-3 py-2">{text}</a>
                </Link>
            )}
        </div>
    );
};

export default Button;

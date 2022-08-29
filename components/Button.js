import Link from "next/link";

const Button = ({ type, text, color, link }) => {
    return (
        <div
            className={`rounded-md font-radio-canada ${
                color === "babyBlue" ? "text-babyBlue-0" : "text-royalPink-0"
            } ${
                color === "babyBlue" ? "bg-babyBlue-700" : "bg-royalPink-700"
            } ${
                color === "babyBlue"
                    ? "border-babyBlue-900"
                    : "border-royalPink-900"
            } border-b-4 cursor-pointer hover:border-b-0 hover:translate-y-1 hover:mb-1`}
        >
            {type === "button" ? (
                <button className="block px-3 py-2 text-sm font-bold bg-r tracking-wider">
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

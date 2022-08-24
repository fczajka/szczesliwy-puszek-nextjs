const Button = ({ type, text, color, link }) => {
    return (
        <div
            className={`rounded-md ${
                color === "babyBlue" ? "text-babyBlue-0" : "text-royalPink-0"
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
                <a
                    href={link}
                    className="block px-3 py-2 text-sm font-bold tracking-wider"
                >
                    {text}
                </a>
            )}
        </div>
    );
};

export default Button;

import Link from "next/link";
import { ButtonTypes, Colors } from "public/enums";
import { ButtonProps } from "public/interfaces";

const Button = ({ type, text, color, link }: ButtonProps) => {
    return (
        <div
            className={`rounded-md  ${
                color === Colors.blue
                    ? "text-babyBlue-1500"
                    : "text-royalPink-1500"
            } ${
                color === Colors.blue ? "bg-babyBlue-300" : "bg-royalPink-300"
            } ${
                color === Colors.blue
                    ? "border-babyBlue-700"
                    : "border-royalPink-700"
            } border-b-4 cursor-pointer hover:border-b-0 text-sm font-bold hover:translate-y-1 hover:mb-1`}
        >
            {type === ButtonTypes.anchor && link ? (
                link.includes("#") ? (
                    <a
                        className="block w-full text-center px-3 py-2"
                        href={link}
                    >
                        {text}
                    </a>
                ) : (
                    <Link
                        className="block w-full text-center px-3 py-2"
                        href={link}
                    >
                        {text}
                    </Link>
                )
            ) : (
                <button type="submit" className="w-full text-center px-3 py-5">
                    {text}
                </button>
            )}
        </div>
    );
};

export default Button;

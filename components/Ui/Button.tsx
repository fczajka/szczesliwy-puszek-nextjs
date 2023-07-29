import Link from "next/link";
import { ButtonTypes, Colors } from "@/public/enums";
import { ButtonProps } from "@/public/interfaces";

const Button = ({ type, text, color, link }: ButtonProps) => {
    return (
        <div
            className={`rounded-primary ${
                color === Colors.blue ? "bg-babyBlue-700" : "bg-royalPink-700"
            }`}
        >
            <div
                className={`rounded-primary -translate-y-1 transition-all motion-reduce:transition-none duration-75 ${
                    color === Colors.blue
                        ? "text-babyBlue-1500 bg-babyBlue-300"
                        : "text-royalPink-1500 bg-royalPink-300"
                } text-sm font-bold hover:translate-y-0`}
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
                    <button
                        type="submit"
                        className="w-full text-center px-3 py-5"
                    >
                        {text}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Button;

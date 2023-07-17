import { Radio_Canada, Titan_One } from "next/font/google";

export const headlineFont = Titan_One({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-headline",
    display: "swap",
});

export const defaultFont = Radio_Canada({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-default",
    display: "swap",
});

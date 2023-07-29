import "./globals.css";
import { defaultFont } from "@/public/fonts";
import { meta } from "@/public/constants";
import Navbar from "@/components/Layout/Navbar";
import Transition from "@/components/Ui/Transition";
import Contact from "@/components/Layout/Contact";
import MobileNavbar from "@/components/Layout/MobileNavbar";
import { LayoutChirldren } from "@/public/interfaces";

export const metadata = {
    title: meta.title,
    description: meta.description,
};

export default function RootLayout({ children }: LayoutChirldren) {
    return (
        <html lang="pl" className="scroll-smooth motion-reduce:scroll-auto">
            <head />
            <body>
                <div
                    className={`bg-babyBlue-0 w-full flex flex-col items-center font-default ${defaultFont.variable} text-babyBlue-1500`}
                >
                    <Navbar />
                    <Transition>
                        <div className="max-w-1920 w-full">{children}</div>
                        <Contact />
                    </Transition>
                    <MobileNavbar />
                </div>
            </body>
        </html>
    );
}

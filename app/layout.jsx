import "./globals.css";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Contact from "../components/Contact";
import Transition from "../components/Transition";
import { defaultFont } from "../public/fonts";

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
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

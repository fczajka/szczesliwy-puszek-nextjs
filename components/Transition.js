import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const variants = {
    in: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    out: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const Transition = ({ children }) => {
    const { pathname } = useRouter();
    const [currentPathname, setCurrentPathname] = useState(pathname);

    useEffect(() => {
        setCurrentPathname(pathname);
    }, [pathname]);

    return (
        <AnimatePresence initial={true} mode="wait">
            <motion.div
                style={{ width: "100%", maxWidth: "1920px" }}
                key={
                    (pathname.includes("#contact") ||
                        pathname.includes("whyUs")) === "true"
                        ? currentPathname
                        : pathname
                }
                variants={variants}
                animate="in"
                initial="out"
                exit="out"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Transition;

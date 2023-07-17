"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Transition = ({ children }) => {
    const pathname = usePathname();

    const animateIn = {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    };

    const animateOut = {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    };

    return (
        <motion.div
            style={{ width: "100%", maxWidth: "1920px" }}
            key={pathname}
            animate={animateIn}
            initial={animateOut}
            exit={animateOut}
        >
            {children}
        </motion.div>
    );
};

export default Transition;

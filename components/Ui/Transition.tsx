"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { animateIn, animateOut } from "@/public/constants";
import { TransitionProps } from "@/public/interfaces";

const Transition = ({ children }: TransitionProps) => {
    const pathname = usePathname();

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

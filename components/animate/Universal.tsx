// ScrollTemp.tsx
"use client";
import { motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollTempProps {
    children: ReactNode;
    y?: number;
    x?: number;
    z?: number;
    opacity?: number;
    duration?: number;
    delay?: number;
    xrotate?: number;
    yrotate?: number;
    zrotate?: number;
    scale?: number;
    type?: string;
    classname?: string;
}

export const Animate = ({
    children,
    y = 0,
    x = 0,
    z = 0,
    opacity = 0,
    duration = 0.2,
    delay = 0,
    xrotate = 0,
    yrotate = 0,
    zrotate = 0,
    scale = 1,
    type = "tween",
    classname = "",
}: ScrollTempProps) => {
    const ref = useRef(null);
    return (
        <motion.div
            ref={ref}
            initial={{
                y,
                x,
                z,
                opacity,
                rotateX: xrotate,
                rotateY: yrotate,
                rotateZ: zrotate,
                scale,
            }}
            whileInView={{
                y: 0,
                x: 0,
                z: 0,
                opacity: 1,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1,
            }}
            transition={{
                duration,
                delay,
                ease: "easeInOut",
                type,
            }}
            className={classname}
        >
            {children}
        </motion.div>
    );
};

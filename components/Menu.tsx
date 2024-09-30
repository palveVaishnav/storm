"use client"
import { Actionbutton } from "./utils/Actionbutton";
import { motion } from "framer-motion"
export default function Menu() {
    return (
        <motion.div
            initial={{ y: -60 }}
            whileInView={{ y: 0 }}
            transition={{ mass: 10, type: 'spring', delay: 2 }}
            className="w-full flex justify-between px-40 items-center p-2 text-xl"
        >
            <p className="text-2xl flex items-center font-bold">
                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: "100%", height: "100%" }} viewBox="0 0 32 32" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg-2126655215_490"></use></svg> */}
                Storm
            </p>
            <ul className="flex gap-8 text-[#ffffff80]">
                <li>Features</li>
                <li>Pricing</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul>
            <Actionbutton varient="white" text="Don't Buy This" />
        </motion.div>
    )
}
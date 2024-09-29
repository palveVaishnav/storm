"use client"
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Titletext } from "./utils/Titletext";
import { Actionbutton } from "./utils/Actionbutton";

export default function HeroSection() {
    return (
        <div className="p-20 w-full grid place-content-center text-center pt-72 relative">
            <div className="flex justify-center">
                <div className="flex justify-center items-center gap-4 border border-[--secondary] p42 rounded-full text-sm text-[#ffffff90] w-fit">
                    {"Elevate your online journey!"}
                    <span className="flex items-center text-[#3973e6]">
                        {"Read More"}
                        <ArrowRightIcon />
                    </span>
                </div>

            </div>
            <Titletext text="Build your dream site" />
            <Titletext text="with the hassle of coding" />
            <span className="text-lg font-thin text-[#ffffff90] px-80 text-center">
                {"Many coding skills needed. Build your dream website hassle-for-free, enjoying a seamless and efficient process that requires time and effort."}
            </span>
            <div className="flex items-center justify-center gap-4 p-4">
                <Actionbutton text="Start for free" varient="white" />
                <Actionbutton text="Watch Video" />
            </div>
            <div className="p-8 relative w-full h-full mt-auto">
                <div className="bg-[#00000040] border p-4 rounded-3xl">
                    <Image
                        alt="Dashboard"
                        src={"https://framerusercontent.com/images/oBAZLwE7u5eNW3kBIvocsLpY8.svg"}
                        width={1000}
                        height={1000}
                        className="w-full h-full bg-black rounded-2xl"
                    />
                </div>
            </div>
            {/* left */}
            <Image
                alt="Background"
                src={"https://framerusercontent.com/images/VAghYRak1orJZWcevSJLQXlxmM.svg"}
                width={1000}
                height={1000}
                className="absolute left-0 h-[100vh] mt-40 w-[60vh]"
            />
            {/* right */}
            <Image
                alt="Background"
                src={"https://framerusercontent.com/images/EV0JayRnHcKEROFlY5vlvdol8G4.svg"}
                width={1000}
                height={1000}
                className="absolute right-0 h-full w-[60vh]"
            />

        </div >
    )
}










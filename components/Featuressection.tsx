// import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Subtag, Subtitle, Subtitlesmall } from './utils/Titletext';
import Image from "next/image";
import { Animate } from "./animate/Universal";
import { PlusCircle } from "lucide-react";

export default function FilteredCourses() {
    return (
        <div className="w-full p-40 grid place-content-center text-center gap-4">
            <Animate y={40} duration={1.5} classname="grid place-content-center text-center gap-4">
                <Subtag subtag="Introducing Storm" />
                <Subtitle subtitle="Look beyond limits." />
                <div className="border rounded-3xl grid grid-cols-2 p-10 gap-6 border-[--secondary]">
                    <div className="rounded-2xl bg-[#101010] col-span-2">
                        <ul className="flex items-center gap-1 p-2 px-6 justify-between">
                            {courses.map((course, index) => (
                                <li className="rounded-xl py-4 px-20 hover:bg-white hover:text-black"
                                    key={index}
                                >{course.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="relative w-full h-full mt-auto rounded-3xl"
                        style={{
                            backgroundImage: `url('https://framerusercontent.com/images/83vvRuJ8KbDgCnL4nZ2Fic2ZKYg.svg')`,
                            backgroundSize: 'cover', // Ensures the image covers the entire container
                            backgroundPosition: 'center', // Centers the image within the container
                            backgroundRepeat: 'no-repeat' // Prevents the image from repeating
                        }}
                    >
                    </div>
                    <div className="border border-[--secondary] col-span-1 h-[50vh] rounded-3xl p-8 flex flex-col justify-around text-left bg-gradient-to-tr from-[#101010] to-[#000000]">
                        {/* <Subtag subtag="Seamless" /> */}
                        <PlusCircle className="w-12 h-20" />
                        <Subtitlesmall subtitle="Automation" />
                        <span className="text-[#ffffff70]">
                            {"Automate repetitive marketing tasks and streamline your workflow. Set up automated campaigns, email sequences, and customer journeys to engage and nurture leads. Save time and resources while delivering targeted and timely marketing messages to your audience, enhancing efficiency and driving conversions."}
                        </span>
                        <span className="flex items-center text-[#3973e6]">
                            {"Click Here"}
                            <ArrowRightIcon />
                        </span>
                    </div>
                </div>
            </Animate>

            <div className="grid grid-cols-2 gap-4 px-20 py-20">
                {/* one */}
                <div className="col-span-2 flex bg-[--gray1] overflow-hidden rounded-3xl ">
                    <div className="grid place-content-center w-1/2 p-12">
                        <Subtag subtag="Seamless" />
                        <Subtitlesmall subtitle="Transform your website with seamless simplicity" />
                        <span className="text-[#ffffff70] p-4 ">
                            {"Storm Framer Template empowers you to create a successful online presence, offering all the essential elements you need to captivate your desired customers."}
                        </span>
                    </div>
                    <div className="relative h-full mt-auto w-1/2 p-4">
                        <Image
                            alt="Chart"
                            src={'https://framerusercontent.com/images/zn2si2TA1dwpjgFJsF0HoiChPg.svg'}
                            width={100}
                            height={100}
                            className="w-full h-full p-2"
                        />
                    </div>
                </div>
                {/* two */}
                <div className="flex flex-col-reverse bg-[--gray1] overflow-hidden rounded-3xl text-left">
                    <div className="grid place-content-center  p-12 gap-2">
                        <Subtag subtag="Seamless" />
                        <Subtitlesmall subtitle="simplicity" />
                        <span className="text-[#ffffff70]">
                            {"Storm Framer Template empowers you to create a successful online presence, offering all the essential elements you need to captivate your desired customers."}
                        </span>
                    </div>
                    <div className="relative h-full mt-auto  p-4">
                        <Image
                            alt="Chart"
                            src={'https://framerusercontent.com/images/5RtJxlIhWIEL71zKwSTMmH17nBY.svg'}
                            width={100}
                            height={100}
                            className="w-full h-full p-2"
                        />
                    </div>
                </div>
                {/* three */}
                <div className="flex flex-col-reverse bg-[--gray1] overflow-hidden rounded-3xl text-left">
                    <div className="grid place-content-center  p-12 gap-2">
                        <Subtag subtag="Seamless" />
                        <Subtitlesmall subtitle="Seamless something" />
                        <span className="text-[#ffffff70]">
                            {"Storm Framer Template empowers you to create a successful online presence, offering all the essential elements you need to captivate your desired customers."}
                        </span>
                    </div>
                    <div className="relative h-full mt-auto  p-4">
                        <Image
                            alt="Chart"
                            src={'https://framerusercontent.com/images/BMXi077oulOgsF2ecsOGdxP4.svg'}
                            width={100}
                            height={100}
                            className="w-full h-full p-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


const courses = [
    {
        name: "Automation",
        icon: "",
        img: "https://framerusercontent.com/images/83vvRuJ8KbDgCnL4nZ2Fic2ZKYg.svg",
        desc: " lorem adpoiffi oufe yewooyew eyew yrweywe ewyrwy wyewew0oyuw yewwy yyewyewew wfewof yfoyo ywf wffwfuwow eww0",
        link: "",
    }, {
        name: "Tracking",
        icon: "",
        img: "https://framerusercontent.com/images/3w280PTaoXLPuXZITTnqA6OZ0eE.svg",
        desc: " lorem adpoiffi oufe yewooyew eyew yrweywe ewyrwy wyewew0oyuw yewwy yyewyewew wfewof yfoyo ywf wffwfuwow eww0",
        link: "",
    }, {
        name: "Insights",
        icon: "",
        img: "https://framerusercontent.com/images/G0cHDj6WhSnj6IXZ02izieUKhI.svg",
        desc: " lorem adpoiffi oufe yewooyew eyew yrweywe ewyrwy wyewew0oyuw yewwy yyewyewew wfewof yfoyo ywf wffwfuwow eww0",
        link: "",
    }, {
        name: "Funnel",
        icon: "",
        img: "https://framerusercontent.com/images/96CliydqzaP3YfsGJaPcPBe7o.svg",
        desc: " lorem adpoiffi oufe yewooyew eyew yrweywe ewyrwy wyewew0oyuw yewwy yyewyewew wfewof yfoyo ywf wffwfuwow eww0",
        link: "",
    }, {
        name: "Conversion",
        icon: "",
        img: "https://framerusercontent.com/images/sFSVmi5lWLz1tJWKQdORYwJsXI.svg",
        desc: " lorem adpoiffi oufe yewooyew eyew yrweywe ewyrwy wyewew0oyuw yewwy yyewyewew wfewof yfoyo ywf wffwfuwow eww0",
        link: "",
    }
]

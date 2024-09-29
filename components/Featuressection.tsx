// import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Subtag, Subtitle, Subtitlesmall } from './utils/Titletext';
import Image from "next/image";

export default function FilteredCourses() {
    return (
        <div className="w-full p-40 grid place-content-center text-center gap-4">
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
                    <span
                        className="bg-[#101010] rounded-full h-fit w-fit px-4 py-1 text-sm"
                    >{"fullstack"}</span>
                    <span className="text-2xl font-semibold">
                        {"Zero to 100 Cohort - Master MERN, DevOps, and System Design with Harkirat Singh"}
                    </span>
                    <p className="text-[--secondary]">
                        {"Join the Zero to 100 Cohort to transform yourself from a beginner to an industry-ready developer. Learn the fundamentals and advanced concepts of the MERN stack, master DevOps practices, and deep dive into system design—all while building real-world projects. This intensive program, taught live by Harkirat Singh, equips you with hands-on experience and the skills needed to tackle modern software challenges."}</p>
                    <span className="flex items-center text-[#3973e6]">
                        {"Click Here"}
                        <ArrowRightIcon />
                    </span>
                </div>
            </div>


            <div className="grid grid-cols-2 mt-20 gap-4">
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
                        <Subtitlesmall subtitle="Transform your website with seamless simplicity" />
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
                        <Subtitlesmall subtitle="Transform your website with seamless simplicity" />
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

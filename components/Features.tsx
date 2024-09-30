import Image from "next/image";
import { Subtag, Subtitlesmall } from "./utils/Titletext";
import { Animate } from "./animate/Universal";

export default function Features() {
    return (
        <div className="flex text-center justify-center flex-col min-h-screen p-20">
            <Subtag subtag="Features" />
            <Subtitlesmall subtitle="Give life to your business." />
            <span className="text-[#ffffff80]">
                {"Build your dream website hassle-free, enjoying a seamless process."}
            </span>
            <div className="flex gap-8 w-full justify-center p-10">
                {feature.map((feature, idx) => (
                    <Animate key={idx} classname="rounded-3xl bg-[--gray1] grid gap-4 p-8 min-h-max"
                        y={50}
                        delay={.5 * idx}
                        duration={1}
                    >
                        <Image
                            alt="Feature Image"
                            src={feature.img}
                            width={0}
                            height={0}
                            className="w-full h-full rounded-3xl overflow-hidden"
                        />
                        <span className="text-3xl font-semibold">
                            {feature.title}
                        </span>

                        <span className="font-semibold">
                            {feature.desc}
                        </span>
                    </Animate>
                ))}

            </div>
        </div>
    )
}

const feature = [
    {
        title: "Always available.",
        desc: "Create, craft and share stories together with real time collabration.",
        img: "https://framerusercontent.com/images/QDZfmz8Icgk3flJtFU6LHaJXI.svg",
    }, {
        title: "Actionable insights.",
        desc: "Measure and optimize performance.  Uncover valuable data.",
        img: "https://framerusercontent.com/images/CSLhDCK3QX1WQbWpFZmoQDijnU.svg",
    }, {
        title: "Efficient workflows.",
        desc: "Boost productivity with keyboard shortcuts. Work smarter and faster.",
        img: "https://framerusercontent.com/images/ZqtY4QRIEeRtYhUtHtgMK39WB0.svg",
    },
]
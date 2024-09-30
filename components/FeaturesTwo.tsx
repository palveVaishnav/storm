import { Subtag, Subtitlesmall } from "./utils/Titletext";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function Features2() {
    return (
        <div className="flex text-center justify-center flex-col min-h-screen p-20">
            <Subtag subtag="Features" />
            <Subtitlesmall subtitle="Elevate your online journey." />
            <span className="text-[#ffffff80]">
                {"Empower your SAAS or startup website with extraordinary capabilities using Storm."}
            </span>
            <div className="grid grid-cols-3 gap-8 w-full place-content-center p-10">
                {feature.map((feature, idx) => (
                    <div key={idx} className="rounded-3xl bg-[--gray1] grid gap-4 p-8 min-h-max">
                        <div className="grid place-content-center">
                            {feature.icon}
                        </div>
                        <span className="text-3xl font-semibold">
                            {feature.title}
                        </span>

                        <span className="font-semibold">
                            {feature.desc}
                        </span>
                    </div>
                ))}

            </div>
        </div>
    )
}

const feature = [
    {
        title: "Easy Customization",
        desc: "Effortlessly tailor your website to match your unique vision.",
        icon: <PlusCircledIcon className="w-20 h-20" />
    }, {
        title: "Versatile Components.",
        desc: "Empower your project with our extensive and customizable collection.",
        icon: <PlusCircledIcon className="w-20 h-20" />
    }, {
        title: "Enhanced Experience.",
        desc: "Delight and captivate your customers with seamless and intuitive interfaces.",
        icon: <PlusCircledIcon className="w-20 h-20" />
    }, {
        title: "Seamless Integration.",
        desc: "Effortlessly incorporate and integrate essential features seamlessly.",
        icon: <PlusCircledIcon className="w-20 h-20" />
    }, {
        title: "Rapid Progress.",
        desc: "Accelerate your startup's growth journey exponentially.",
        icon: <PlusCircledIcon className="w-20 h-20" />
    }, {
        title: "Empower Your Project.",
        desc: "Unlock and maximize the potential of your startup.",
        icon: <PlusCircledIcon className="w-20 h-20" />
    },
]
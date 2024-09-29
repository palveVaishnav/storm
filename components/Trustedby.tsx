import Image from "next/image";

export default function Truste() {
    return (
        <div className="grid place-content-center w-full gap-4">
            <span className="text-3xl text-center">
                {"Trusted by global brands"}
            </span>
            <div className="flex w-full overflow-x-auto gap-10 p-2">
                {Array.from({ length: 8 }, (_, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-[--gray1] rounded-xl p-1 px-2 gap-2"
                    >
                        <Image
                            alt="Profile"
                            src={`https://i.pravatar.cc/${index * 100}`}
                            width={40}
                            height={40}
                            className="border rounded-full"
                        />
                        {"Username"}
                    </div>
                ))}
            </div>
        </div>
    )
}
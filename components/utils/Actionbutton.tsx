export function Actionbutton({
    text,
    link,
    varient
}: {
    text: string,
    link?: string,
    varient?: 'white' | ''
}) {
    return (
        <a
            className={`px-6 py-3 w-fit rounded-2xl font-bold 
                ${varient === "white" ? 'bg-white text-black' : 'border border-[#ffffff50]'}
            `}
            href={link}
        >
            {text}
        </a>
    )
}
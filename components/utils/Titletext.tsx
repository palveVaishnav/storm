
export function Titletext({ text }: { text: string }) {
    return (
        <span className="text-[4em] font-sans font-bold px-10 text-center">
            {text}
        </span>
    )
}
export function Subtag({
    subtag,
}: {
    subtag: string,
}) {
    return (
        <span className="text-xl text-blue-500 font-semibold">
            {subtag}
        </span>
    )
}

export function Subtitle({
    subtitle,
}: {
    subtitle: string,
}) {
    return (
        <span className="text-[3.5em] font-semibold space-x-0 space-y-0">
            {subtitle}
        </span>
    )
}


export function Subtitlesmall({
    subtitle,
}: {
    subtitle: string,
}) {
    return (
        <span className="text-[3em] font-semibold leading-none">
            {subtitle}
        </span>
    )
}
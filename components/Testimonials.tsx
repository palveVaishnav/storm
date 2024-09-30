import { Subtag, Subtitle } from "./utils/Titletext";

export default function Testimonials() {
    return (
        <div className="grid place-content-center text-center">
            <Subtag subtag="Testimonials" />
            <Subtitle subtitle="Real User Experience ." />
            <span className="text-[#ffffff80]">
                {"See how our SAAS solution has boosted businesses' success."}
            </span>
            <div className="h-[40rem] rounded-md grid grid-cols-4 p-20 gap-4">
                {
                    testimonials.map((t, idx) => (
                        <div className="p-5 bg-[--gray1] gap-2 rounded-2xl grid place-content-center"
                            key={idx}
                        >
                            <span className="text-xl">
                                {t.title}
                            </span>
                            <span className="text-left">
                                {t.quote}
                            </span>
                            <p className="text-sm">
                                {t.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
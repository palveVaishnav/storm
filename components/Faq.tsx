import { PlusCircle } from "lucide-react";
import { Subtag, Subtitlesmall } from "./utils/Titletext";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "How does the billing work?",
        answer:
            "Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
    },
    {
        question: "Can I get a refund for my subscription?",
        answer:
            "We offer a 30-day money-back guarantee for most of our subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
    },
    {
        question: "How do I cancel my subscription?",
        answer:
            "To cancel your subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.",
    },
    {
        question: "Is there a free trial?",
        answer:
            "We offer a free trial of our software for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.",
    },
    {
        question: "How do I contact support?",
        answer:
            "If you need help with our platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing support@ourwebsite.com.",
    },
    {
        question: "Do you offer any discounts or promotions?",
        answer:
            "We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company's newsletter or follow us on social media.",
    },
];

export default function FAQ() {
    return (
        <div className="relative w-full px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
            <div className="mx-auto px-5">
                <div className="flex flex-col items-center gap-4">
                    <Subtag subtag="FQA" />
                    <Subtitlesmall subtitle="Have any questions?" />
                    <p className="mt-3 text-lg text-neutral-500 md:text-xl">{"Your burning questions, answered swiftly and succinctly."}</p>
                </div>

                <div className="mx-auto mt-8 grid gap-4">
                    {faqItems.map((item, index) => (
                        <div className="py-5 p-4 bg-[--gray1] rounded-2xl" key={index}>
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>{item.question}</span>
                                    <span className="transition group-open:rotate-45 ">
                                        <PlusCircle className="text-[#ffffff40] w-10" />
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3">{item.answer}</p>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
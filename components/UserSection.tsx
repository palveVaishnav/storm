import { Subtag, Subtitlesmall } from "./utils/Titletext";

export default function UserSection() {
    return (
        <div className="p-10">
            <div className="grid grid-flow-col grid-cols-2 w-full">

                <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-[--gray1] text-center ml-40 p-10 rounded-3xl shadow-md col-span-2 w-fit px-20">
                            <h2 className="text-4xl font-semibold">750</h2>
                            <p className="mt-2 text-[--secondary]">Total Users</p>
                        </div>

                        <div className="bg-[--gray1] text-center p-10 rounded-3xl shadow-md">
                            <h2 className="text-4xl font-semibold">145</h2>
                            <p className="mt-2 text-[--secondary]">Data Processed</p>
                        </div>

                        <div className="bg-[--gray1] text-center p-10 rounded-3xl shadow-md">
                            <h2 className="text-4xl font-semibold">526</h2>
                            <p className="mt-2 text-[--secondary]">Successful Transactions</p>
                        </div>

                        <div className="bg-[--gray1] text-center ml-20 p-10 rounded-3xl shadow-md col-span-2 w-fit px-20">
                            <h2 className="text-4xl font-semibold">372</h2>
                            <p className="mt-2 text-[--secondary]">Time Saved</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col col-span-1 p-40 justify-center">
                    <Subtag subtag="Analytics" />
                    <Subtitlesmall subtitle="Powerful data insights." />
                    <span className="">
                        {"Unlock the true potential of your data with our advanced analytics tools. Gain valuable insights and make informed decisions to drive your business forward."}
                    </span>
                </div>

            </div>
        </div>
    )
}
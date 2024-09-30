"use client"
import { Subtag, Subtitlesmall } from "./utils/Titletext";
import { motion } from 'framer-motion';

export default function UserSection() {
    return (
        <div className="p-10 mb-20">
            <div className="grid grid-flow-col grid-cols-2 w-full">
                <div className="grid place-content-center bg-black text-white">
                    <div className="grid place-content-center ">
                        <motion.div
                            initial={{
                                x: -80,
                                y: 0,
                            }}
                            whileInView={{
                                x: -80,
                                y: -170,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                            }}
                            className="bg-[--gray1] text-center p-10 rounded-3xl w-fit px-20 absolute"
                        >
                            <h2 className="text-4xl font-semibold">750</h2>
                            <p className="mt-2 text-[--secondary]">Total Users</p>
                        </motion.div>
                        <motion.div
                            initial={{
                                x: 0,
                                y: 0,
                            }}
                            whileInView={{
                                x: -240,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                            }}
                            className="bg-[--gray1] text-center p-10 rounded-3xl w-fit px-16 absolute"
                        >
                            <h2 className="text-4xl font-semibold">145</h2>
                            <p className="mt-2 text-[--secondary]">Data Processed</p>
                        </motion.div>
                        <motion.div
                            initial={{
                                x: -80,
                                y: 0,
                            }}
                            whileInView={{
                                x: 20,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                            }}
                            className="bg-[--gray1] text-center p-10 rounded-3xl w-fit px-10 absolute"
                        >
                            <h2 className="text-4xl font-semibold">562</h2>
                            <p className="mt-2 text-[--secondary]">Successful Transactions</p>
                        </motion.div>
                        <motion.div
                            initial={{
                                x: -80,
                                y: 0,
                            }}
                            whileInView={{
                                x: -160,
                                y: 170,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                            }}
                            className="bg-[--gray1] text-center p-10 rounded-3xl w-fit px-20 absolute"
                        >
                            <h2 className="text-4xl font-semibold">372</h2>
                            <p className="mt-2 text-[--secondary]">Time Saved</p>
                        </motion.div>

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
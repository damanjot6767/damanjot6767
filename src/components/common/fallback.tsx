import React from 'react'
import { motion } from "../../utils/animation"

const FallbackLoading = () => {
    return (
        <div className='
        z-[1000]
        fixed
        w-full 
        top-0
        bottom-0
        h-screen
        flex
        items-center
        justify-center
        bg-white'>
            <motion.div className='w-[50px] h-[50px] relative'>
                <motion.div
                    className='w-[25px] h-[25px]  rounded-[50%] border-[3px] border-blue1 absolute flex items-center justify-center'
                    animate={{
                        top: ["0%", "50%", "50%", "0%", "0%"],
                        left: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    <div className='h-[50%] w-[50%] bg-blue1 rounded-[50%]' />
                </motion.div>
                <motion.div
                    className='w-[25px] h-[25px] rounded-[50%] bg-blue2 absolute'
                    animate={{
                        top: ["50%", "50%", "0%", "0%", "50%"],
                        left: ["0%", "50%", "50%", "0%", "0%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    className='w-[25px] h-[25px]  rounded-[50%] bg-blue1 absolute'
                    animate={{
                        top: ["50%", "0%", "0%", "50%", "50%"],
                        left: ["50%", "50%", "0%", "0%", "50%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    className='w-[25px] h-[25px]  rounded-[50%] bg-blue2 absolute'
                    animate={{
                        top: ["0%", "0%", "50%", "50%", "0%"],
                        left: ["50%", "0%", "0%", "50%", "50%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
            </motion.div>
        </div>
    )
}

export default FallbackLoading

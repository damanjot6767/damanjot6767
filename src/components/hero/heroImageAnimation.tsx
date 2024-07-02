import React, { useRef } from 'react';
import { TweenMax } from "../../utils/gsap"
import ReactImage from "../../assets/images/react.png"
import NextImage from "../../assets/images/nextjs.png";
import NodeImage from "../../assets/images/nodejs.png";
import AwsImage from "../../assets/images/aws.png";
import TypeScriptImage from "../../assets/images/typescript.png";
import { motion } from "../../utils/animation";

const HeroImageAnimation = () => {
    return (
        <div className='flex'>
            <motion.div
                id="slide"
                className="
                top-[8%]
                left-[20%]
                absolute
                bg-white
                px-2
                py-3
                lg:py-4
                lg:px-5
                w-[12%]
                h-[16%]
                rounded-lg"
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.1 }}
                viewport={{ once: true }}>
                <img
                    src={ReactImage}
                    className="w-[100%] h-[100%]" />
            </motion.div>

            <motion.div
                id="slide"
                className="
                top-[40%]
                left-[8%]
                px-2
                py-3
                lg:py-4
                lg:px-5
                absolute
                bg-white
                w-[13%]
                h-[17%]
                rounded-lg"
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                viewport={{ once: true }}>
                <img
                    src={NextImage}
                    className="w-[100%] h-[100%]" />
            </motion.div>

            <motion.div
                id="slide"
                className="
                absolute
                bottom-[8%]
                left-[2%]
                px-2
                py-3
                lg:py-4
                lg:px-5
                bg-white
                w-[12%]
                h-[16%]
                rounded-lg"
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.3 }}
                viewport={{ once: true }}>
                <img
                    src={NodeImage}
                    className="w-[100%] h-[100%]" />
            </motion.div>

            <motion.div
                id="slide"
                className="
                absolute
                top-[10%]
                right-[10%]
                px-2
                py-3
                bg-white
                w-[13%]
                h-[17%]
                rounded-lg"
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                viewport={{ once: true }}>
                <img
                    src={AwsImage}
                    className="w-[100%] h-[100%]" />
            </motion.div>

            <motion.div
                id="slide"
                className="
                absolute
                bottom-[20%]
                right-[2%]
                px-3
                md:px-4
                py-3
                bg-white
                w-[13%]
                h-[17%]
                rounded-lg"
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.5 }}
                viewport={{ once: true }}>
                <img
                    src={TypeScriptImage}
                    className="w-[100%] h-[100%]" />
            </motion.div>
        </div>
    )
}

export { HeroImageAnimation }
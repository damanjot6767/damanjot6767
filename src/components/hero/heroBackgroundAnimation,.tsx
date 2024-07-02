import React from 'react'
import { motion } from "../../utils/animation";

const HeroBackgroundAnimation = () => {
  return (
    <div className="flex z-10">
                <motion.div
                className="
                absolute
                left-0
                top-0
                w-3
                h-3
                rounded-full
                gradient6"
                whileInView={{
                    left: ['0%', '30%', '0%'],
                    top: ['0%', '30%', '0%'],
                    transition: { duration: 40, ease: 'linear', repeat: Infinity }
                }}
                viewport={{once: true}}
                />

               <motion.div
                className="
                absolute
                left-[40%]
                top-[50%]
                w-4
                h-4
                rounded-full
                gradient3"
                whileInView={{
                    left: ['40%', '0%', '40%'],
                    transition: { duration: 40, ease: 'linear', repeat: Infinity }
                }}
                viewport={{once: true}}
                />

               <motion.div
                className="
                absolute
                right-0
                top-0
                w-3
                h-3
                rounded-full
                gradient5"
                whileInView={{
                    right: ['0%', '30%', '0%'],
                    top: ['0%', '30%', '0%'],
                    transition: { duration: 40, ease: 'linear', repeat: Infinity }
                }}
                viewport={{once: true}}
                />  

                <motion.div
                className="
                absolute
                left-0
                bottom-0
                w-2
                h-2
                rounded-full
                gradient4"
                whileInView={{
                    left: ['0%', '35%', '0%'],
                    bottom: ['0%', '35%', '0%'],
                    transition: { duration: 40, ease: 'linear', repeat: Infinity }
                }}
                viewport={{once: true}}
                />

                <motion.div
                className="
                absolute
                left-[25%]
                top-0
                w-3
                h-3
                rounded-full
                gradient5"
                whileInView={{
                    top: ['0%', '100%', '0%'],
                    transition: { duration: 40, ease: 'linear', repeat: Infinity }
                }}
                viewport={{once: true}}
                />

                <motion.div
                className="
                absolute
                right-[40%]
                top-[50%]
                w-2
                h-2
                rounded-full
                gradient6"
                whileInView={{
                    right: ['40%', '0%', '40%'],
                    transition: { duration: 40, ease: 'linear', repeat: Infinity }
                }}
                viewport={{once: true}}
                />

                <motion.div
                className="
                absolute
                right-0
                bottom-0
                w-4
                h-4
                rounded-full
                gradient7"
                whileInView={{
                    right: ['0%', '35%', '0%'],
                    bottom: ['0%', '35%', '0%'],
                    transition: { duration: 40, ease: 'linear', repeat: Infinity }
                }}
                viewport={{once: true}}
                />

                <motion.div
                className="
                absolute
                right-[25%]
                top-0
                w-3
                h-3
                rounded-full
                gradient5"
                whileInView={{
                    top: ['0%', '100%', '0%'],
                    transition: { duration: 40, ease: 'linear', repeat: Infinity },
                }}
                viewport={{once: true}}
                />
            </div>
  )
}

export {HeroBackgroundAnimation}

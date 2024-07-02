import React from 'react'
import { TypographyH1, TypographyH3, TypographyH4, TypographyP } from '../ui/Typography'
import { motion, useAnimation } from "../../utils/animation"
import { MdDeveloperBoard } from "../../utils/icons"
import { AnimatedCounter } from './animatedCounter'


const progressData = [
    {
        id: 1,
        title: "For over a decade, we've been partnering ever.",
        value: 90,
        icon: MdDeveloperBoard
    },
    {
        id: 2,
        title: "Majority owned companies we have in world wide.",
        value: 120,
        icon: MdDeveloperBoard
    },
    {
        id: 3,
        title: "Don't waste people's time. We speak plainly: no buzzwords.",
        value: 130,
        icon: MdDeveloperBoard
    },
]


const Analytics = () => {

    return (
        <div className='
        w-full
        realtive'>

            {/* Experience Main section */}
            <div className='
            xl:w-[lg] 
            xl:m-auto 
            relative
            lg:px-20 
            px-5
            pb-20
            flex
            items-center
            justify-center'>
                <div className='
                grid
                grid-cols-1
                lg:grid-cols-3
                w-full
                gap-20
                bg-primary
                lg:p-[100px]
                px-5
                py-[100px]'>

                    {progressData?.map((item) => (
                        <div className='
                            flex
                            flex-col
                            gap-3
                            text-white
                            justify-center
                            items-start'
                            key={item.id}>

                            <div className='
                                flex
                                items-center
                                justify-center
                                gap-8
                                '>

                                <div className='
                                bg-white
                                px-5
                                py-4
                                rounded-3xl'>
                                    {<item.icon size={50} className='text-primary-foreground '/>}
                                </div>
                                <div className='flex
                                items-center
                                justify-center
                                gap-1'>
                                    {/* <TypographyH1
                                        title={`${item.value}+`}
                                        className='font-bold ' /> */}
                                        <AnimatedCounter from={0} to={item.value}/>
                                        <TypographyH1
                                        title='+' />
                                </div>
                            </div>

                            <div className='
                            flex
                            items-center
                            justify-center'>
                                <TypographyP 
                                    title={item.title}
                                    className='text-white leading-5'/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Analytics
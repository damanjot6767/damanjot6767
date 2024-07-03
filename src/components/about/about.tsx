import React from 'react'
import { TypographyH3, TypographyH4, TypographyP } from '../ui/Typography'
import { motion, useAnimation } from "../../utils/animation"
import { Tilt } from '../../utils/parallax';
import { Progress } from '../ui/progress';


const progressData = [
    {
        id:1,
        title: 'Web 3 Development',
        value: 90,
        fillColor: "gradient4" 
    },
    {
        id:2,
        title: 'Web Development',
        value: 95,
        fillColor: "gradient7" 
    },
    {
        id:3,
        title: 'Api Development',
        value: 80,
        fillColor: "gradient6" 
    }
]


const About = () => {

    return (
        <div 
        id="about"
        className='
        w-full
        realtive
        pt-20'>

            {/* Experience Main section */}
            <div className='
            xl:w-[80%] 
            xl:m-auto 
            relative
            grid
            grid-cols-1
            lg:grid-cols-2
            h-auto
            lg:px-20 
            px-5
            py-20
            gap-20'>

                {/* Content Section */}
                <div className='
                flex
                flex-col
                justify-center
                gap-10'>
                    {/* Header section */}
                    <div className="
                    flex
                    flex-col
                    gap-5
                    ">
                        <div className='
                        flex
                        items-center
                        gap-5
                        text-primary-foreground'>
                            <span className='h-[9px] w-[9px] bg-primary rounded-full' />
                            <TypographyH3 title='About Me' />
                            <span className='h-[9px] w-[9px] bg-primary rounded-full' />
                        </div>

                        <div
                            className="
                            max-w-[400px]
                            md:max-w-[500px]
                            text-[30px]
                            font-bold 
                            lg:text-[45px]
                            md:leading-[55px]
                            leading-[45px]">
                            Professional
                            <span className="text-primary-foreground">{" MERN "}</span>
                            Stack Developer
                        </div>

                        <div className='
                        lg:w-[85%]
                        w-full
                        flex
                        items-center
                        text-secondary-foreground'>
                            <TypographyP
                                title='Strong in design and integration with intuitive problemsolving skills. Proficient in JavaScript, React, AWS, Nodejs, MongoDB, TypeScript ,. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start a career as a fill-stack web developer with a reputed firm driven by technology.'
                                className='lg:text-xl text-lg font-[350]' />
                        </div>

                    </div>

                    {/* Progress Section */}
                    <div className='
                    flex
                    flex-col
                    gap-5'>

                        {progressData?.map((item)=>(
                            <div className='
                            lg:w-[80%]
                            w-full
                            flex
                            flex-col
                            gap-3
                            text-secondary-foreground'
                            key={item.id}>
                                <Progress 
                                value={item.value} 
                                className='h-2 rounded-full'
                                filledStyle={item.fillColor}/>
                                <div className='
                                flex
                                items-center
                                justify-between
                                '>
    
                                   <div>
                                   <TypographyP
                                     title={item.title}
                                    className='font-bold' />
                                   </div>
                                   <div>
                                   <TypographyP
                                     title={`${item.value}%`}
                                    className='font-bold' />
                                   </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Image Section */}
                <Tilt>
                    <motion.div
                        className='
                        flex 
                        items-center
                        justify-center'
                        initial={{x:'-7%'}}
                        whileInView={{x:'0%'}}
                        transition={{duration: .7}}
                        viewport={{once: true}}>
                        <img
                            src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h4-section-shape2.png'
                            className='w-full h-full' />
                    </motion.div>
                </Tilt>
            </div>
        </div>
    )
}

export default About
import React from 'react'
import { TypographyH2, TypographyH3, TypographyH4, TypographyP } from '../ui/Typography'
import { motion, useAnimation } from "../../utils/animation"
import { useFeatureCardData } from '../../hooks/useFeaturesCard'
import StepImage from "../../assets/images/stepImage.png"
import { GoArrowRight} from "../../utils/icons"

const Steps = () => {
    const featuresData = useFeatureCardData();

    const sendMessageButtonMotion = {
        rest: {
          width: '35%',
          transition: {
            duration: 0.3,
          }
        },
        hover: {
          width: '100%',
          background: 'hsl(var(--primary))',
          transition: {
            duration: 0.3
          }
        }
      };

    return (
        <div className='
        w-full
        h-full
        realtive'>

            <div className='
            xl:w-[lg] 
            xl:m-auto 
            flex
            flex-col
            items-center
            h-auto
            lg:px-20 
            px-5
            pt-20
            gap-20'>
                {/* Header section */}
                <div className="
                flex
                flex-col
                items-center
                gap-3
                ">
                    <div className='
                flex
                items-center
                gap-5
                justify-center
                text-primary-foreground'>
                        <span className='h-[9px] w-[9px] bg-primary rounded-full' />
                        <TypographyH3 title='How it Works' />
                        <span className='h-[9px] w-[9px] bg-primary rounded-full' />
                    </div>

                    <div
                        className="
                        text-center
                        max-w-[400px]
                        md:max-w-[550px]
                        text-[30px]
                        font-bold 
                        lg:text-[45px]
                        md:leading-[60px]
                        leading-[45px]">
                        We Have Some
                        <span className="text-primary-foreground">{" Easy Steps "}</span>
                        To Process
                    </div>

                    <div className='
                    flex
                    items-center
                    justify-center
                    text-secondary-foreground'>
                        <TypographyP
                            title='We shows only the best websites and portfolios built completely.'
                            className='text-xl font-[250] text-center' />
                    </div>

                </div>

                {/* Steps section */}
                <div className='
                xl:w-[80%]
                lg:w-[90%]
                w-full
                grid
                grid-cols-1
                lg:grid-cols-11
                lg:grid-rows-3
                gap-5'>
                    <div className='
                    order-1
                    lg:order-none
                    h-[300px] 
                    w-full
                    lg:col-span-5
                    flex
                    items-center
                    justify-end'>
                        <div className='
                        lg:w-[80%]
                        flex
                        flex-col
                        gap-3'>
                            <TypographyH2 title='Send us Message'/>

                            <div className='
                            flex
                            items-center
                            text-secondary-foreground'>
                                <TypographyP
                                    title='Join us in a replay of this webinar to see how to go from the first line of code to the first message sent in less than 15 minutes, using the form when you go to contact page.'
                                    className='' />
                            </div>

                                {/* Our Services */}
                            <motion.div className="
                                mt-4
                                flex
                                item-center"
                                initial={{y:40}}
                                whileInView={{y: 0}}
                                transition={{duration: 0.6}}>
                                <motion.div className="
                                min-w-[170px]
                                relative
                                flex
                                items-center
                                py-4
                                px-5
                                rounded-full
                                transition-all
                                duration-200
                                hover:px-7
                                hover:text-white"
                                initial="rest" 
                                whileHover="hover"
                                whileTap='hover'>
                                    <TypographyH4 
                                    className="
                                    font-[500]
                                    z-10" 
                                    title="Send Message"/>
                                    <motion.div className='
                                    absolute
                                    left-0
                                    w-full
                                    h-full
                                    bg-muted
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center'
                                    variants={sendMessageButtonMotion}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                    </div>
                    <div className='
                    hidden 
                    h-full 
                    row-span-3 
                    lg:flex
                    flex-col
                    items-center
                    justify-center
                    '>
                        <div className='
                        w-full
                        p-2
                        flex
                        flex-col
                        h-[70%]
                        items-center
                        gap-10
                        '>
                            <GoArrowRight 
                            size={45}
                            className="p-2 text-white bg-violet-500 rounded-full"/>

                            <div 
                            className='
                            relative 
                            w-[2px] 
                            bg-gray-300 
                            h-[30%]
                            rounded-full'>
                                <motion.div 
                                className='
                                absolute
                                h-full
                                w-full
                                bg-violet-500
                                rounded-full'
                                initial={{height:'0%'}}
                                whileInView={{height:'100%'}}
                                transition={{duration: 1}}/>
                            </div>
                            <GoArrowRight 
                            size={45}
                            className="p-2 text-white bg-violet-500 rounded-full rotate-180"/>

                            <div 
                            className='
                            relative 
                            w-[2px] 
                            bg-gray-300 
                            h-[30%]
                            rounded-full'>
                                <motion.div 
                                className='
                                absolute
                                h-full
                                w-full
                                bg-violet-500
                                rounded-full'
                                initial={{height:'0%'}}
                                whileInView={{height:'100%'}}
                                transition={{duration: 1, delay: 0.4}}/>
                            </div>
                            <GoArrowRight 
                            size={45}
                            className="p-2 text-white bg-violet-500 rounded-full"/>
                        </div>
                    </div>
                    <div className='
                     order-2
                     lg:order-none
                     h-[200px]
                     md:h-[300px] 
                     lg:col-span-5
                     flex
                     items-center'>
                       <div 
                       className='
                       flex
                       items-center
                       w-full
                       h-full
                       lg:h-[65%]'>
                            <div className='
                            h-full
                            w-[35%]
                            bg-primary
                            flex
                            items-center
                            justify-center
                            rounded-l-[25px]'>
                                <TypographyH3 title='01' className='text-white'/>
                            </div>
                            <div className='
                            w-full 
                            h-full 
                            bg-secondary
                            rounded-r-[25px]
                            flex
                            items-center
                            justify-center'>
                                <img 
                               src={StepImage}
                                className='w-[35%]'/>
                            </div>
                       </div>
                    </div>
                    <div className='
                     order-4
                     lg:order-none
                     h-[200px]
                     md:h-[300px] 
                     lg:col-span-5
                     flex
                     items-center'>
                       <div 
                       className='
                       flex
                       items-center
                       w-full
                       h-full
                       lg:h-[65%]'>
                            <div className='
                            h-full
                            w-[35%]
                            bg-pink1
                            flex
                            items-center
                            justify-center
                            rounded-l-[25px]'>
                                <TypographyH3 title='02' className='text-white'/>
                            </div>
                            <div className='
                            w-full 
                            h-full 
                            bg-secondary
                            rounded-r-[25px]
                            flex
                            items-center
                            justify-center'>
                                <img 
                               src={StepImage}
                                className='w-[35%]'/>
                            </div>
                       </div>
                    </div>
                    <div className='
                    order-3
                    lg:order-none
                    h-[300px] 
                    w-full
                    lg:col-span-5
                    flex
                    items-center
                    justify-end'>
                        <div className='
                        lg:w-[80%]
                        flex
                        flex-col
                        gap-3'>
                            <TypographyH2 title='Discuss With Us'/>

                            <div className='
                            flex
                            items-center
                            text-secondary-foreground'>
                                <TypographyP
                                    title='When we receive your message. Our support team will check the information and provide you with suitable solutions for our services available on this website.'
                                    className='' />
                            </div>

                                {/* Our Services */}
                            <motion.div className="
                                mt-4
                                flex
                                item-center"
                                initial={{y:40}}
                                whileInView={{y: 0}}
                                transition={{duration: 0.6}}>
                                <motion.div className="
                                min-w-[170px]
                                relative
                                flex
                                items-center
                                py-4
                                px-5
                                rounded-full
                                transition-all
                                duration-200
                                hover:px-7
                                hover:text-white"
                                initial="rest" 
                                whileHover="hover"
                                whileTap='hover'>
                                    <TypographyH4 
                                    className="
                                    font-[500]
                                    z-10" 
                                    title="Open a ticket"/>
                                    <motion.div className='
                                    absolute
                                    left-0
                                    w-full
                                    h-full
                                    bg-muted
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center'
                                    variants={sendMessageButtonMotion}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                    </div>
                    <div className='
                    order-5
                    h-[300px] 
                    w-full
                    lg:col-span-5
                    flex
                    items-center
                    justify-end'>
                        <div className='
                        lg:w-[80%]
                        flex
                        flex-col
                        gap-3'>
                            <TypographyH2 title='Make a Payment!'/>

                            <div className='
                            flex
                            items-center
                            text-secondary-foreground'>
                                <TypographyP
                                    title='Payment has never been so easy. We use reliable and secure payment services. Your privacy will be best guaranteed. Services are paid for through Payoneer and Paypal.'
                                    className='' />
                            </div>

                                {/* Our Services */}
                            <motion.div className="
                                mt-4
                                flex
                                item-center"
                                initial={{y:40}}
                                whileInView={{y: 0}}
                                transition={{duration: 0.6}}>
                                <motion.div className="
                                min-w-[170px]
                                relative
                                flex
                                items-center
                                py-4
                                px-5
                                rounded-full
                                transition-all
                                duration-200
                                hover:px-7
                                hover:text-white"
                                initial="rest" 
                                whileHover="hover"
                                whileTap='hover'>
                                    <TypographyH4 
                                    className="
                                    font-[500]
                                    z-10" 
                                    title="Contact Us"/>
                                    <motion.div className='
                                    absolute
                                    left-0
                                    w-full
                                    h-full
                                    bg-muted
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center'
                                    variants={sendMessageButtonMotion}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                    </div>
                    <div className='
                     order-6
                     h-[200px]
                     md:h-[300px] 
                     lg:col-span-5
                     flex
                     items-center'>
                       <div 
                       className='
                       flex
                       items-center
                       w-full
                       h-full
                       lg:h-[65%]'>
                            <div className='
                            h-full
                            w-[35%]
                            bg-violet1
                            flex
                            items-center
                            justify-center
                            rounded-l-[25px]'>
                                <TypographyH3 title='03' className='text-white'/>
                            </div>
                            <div className='
                            w-full 
                            h-full 
                            bg-secondary
                            rounded-r-[25px]
                            flex
                            items-center
                            justify-center'>
                                <img 
                               src={StepImage}
                                className='w-[35%]'/>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps
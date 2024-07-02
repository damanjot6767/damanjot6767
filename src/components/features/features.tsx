import React from 'react'
import { TypographyH3, TypographyH4, TypographyP } from '../ui/Typography'
import { motion , useAnimation} from "../../utils/animation"
import { useFeatureCardData } from '../../hooks/useFeaturesCard'

const Features = () => {
const featuresData = useFeatureCardData();

  return (
    <div className='
    w-full
    h-full
    realtive'>

        <div className='
        xl:w-[85%] 
        flex
        flex-col
        items-center
        h-auto
        lg:px-20 
        px-5
        pt-20
        gap-20
        mx-auto'>
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
                    <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
                    <TypographyH3 title='Awesome features'/>
                    <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
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
                    Choose
                    <span className="text-primary-foreground">{" The Best "}</span>
                    IT Service Company
                </div>

                <div className='
                flex
                items-center
                justify-center
                text-secondary-foreground'>
                    <TypographyP 
                    title='An IT firm or MSP who keeps your IT running smoothly'
                    className='text-xl font-[250] text-center'/>
                </div>
               
            </div>

            {/* Features Section */}
            <motion.div className='
             w-full
             flex
             flex-col
             gap-8
             items-center'>
                 {/* Features Card Section */}
                 <motion.div className='
                    w-full
                    grid 
                    grid-cols-1 
                    lg:grid-cols-3
                    gap-10'
                    initial={{y: 50, opacity: 0.9}}
                    whileInView={{y: 0., opacity:1}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}>

                        {featuresData?.map((item)=>(
                            <motion.div className='
                            group
                            relative
                            flex
                            flex-col
                            justify-between
                            items-start
                            h-[320px] 
                            bg-blue1
                            rounded-[40px]
                            overflow-hidden
                            px-6
                            py-8
                            transition-all
                            duration-200
                            hover:bg-blue3
                            lg:hover:scale-y-110
                            lg:hover:scale-x-110'>
        
                                <div className='
                                top-[-10%]
                                left-[50%]
                                absolute
                                w-[120%]
                                h-[140%]
                                bg-blue2
                                rounded-full
                                flex
                                items-center
                                justify-center
                                shadow1
                                transition-all
                                duration-200
                                group-hover:bg-blue4'>
                                    <div className='
                                    w-[40%]
                                    h-[40%]
                                    bg-blue1
                                    rounded-full
                                    transition-all
                                    duration-200
                                    group-hover:bg-blue3'/>
                                </div>
        
                                {/* Image Icon Section */}
                                <div className='
                                flex
                                items-center
                                justify-center
                                w-auto
                                h-auto'>
                                    <img 
                                    src={item.imageUrl}
                                    className='h-[60px] w-[65px]'/>
                                </div>
        
                                {/* Header section */}
                                <div className='
                                flex
                                items-center
                                justify-center
                                w-auto
                                h-auto
                                z-10'>
                                    <TypographyH3 
                                    title={item.title} 
                                    className='text-white'/>
                                </div>
        
                                {/* Description section */}
                                <div className='
                                flex
                                items-center
                                justify-center
                                w-auto
                                h-auto'>
                                    <TypographyP 
                                    title={item.description}
                                    className='text-white opacity-70'/>
                                </div>
        
        
                                {/* Arrow Icon section */}
                                <div className='
                                flex
                                items-center
                                justify-center
                                w-auto
                                h-auto'>
                                    <item.icon size={50} className='bg-white p-3 rounded-full'/>
                                </div>
        
                            </motion.div>
                        ))}
                 </motion.div>

                 {/* Term & condition section */}
                 <motion.div className='
                 text-lg'
                 initial={{y: 50}}
                 whileInView={{y: 0}}
                 transition={{duration: 0.9}}
                 viewport={{once: true}}>
                    Conditions are applied for individual service <span className='text-primary-foreground font-semibold underline'>Terms & Conditions</span>
                 </motion.div>
            </motion.div>

        </div>
    </div>
  )
}

export default Features
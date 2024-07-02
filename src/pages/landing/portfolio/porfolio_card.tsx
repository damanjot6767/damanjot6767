import { cn } from '../../../lib/utils';
import React, { useEffect, useState } from 'react'
import {animate, motion} from "../../../utils/animation"
import { TypographyH4, TypographyH6 } from '../../../components/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../utils/constant';
import { ProjectModal } from "../../../reducers/projects";

const PorfolioCard = ({item, index}:{item:ProjectModal, index: number}) => {
    const navigate = useNavigate();

    const coverImage = item.images?.find((ele)=> ele.isCover===true)
    
    return (
        <motion.div 
        className='
        relative
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        shadow-lg
        overflow-hidden
        bg-white
        rounded-lg
        py-2'
        key={item.id}
        initial={{x: 40, opacity: 0}}
        whileInView={{x:0, opacity: 100}}
        transition={{duration: 0.5, delay: 0.1*index, ease:'easeIn'}}
        viewport={{once: true}}
        onClick={()=> navigate(RoutesName.OurPortfolio+"/"+item.id)}>
            <motion.div 
               className={cn("relative rounded-lg",
                coverImage?.type==="iphone"?
                "h-[300px] w-[140px]"
                :"h-[300px] w-[100%]")}
                whileHover={{scale: 1.1}}
                transition={{duration: 0.4}}>
                {/* device image */}
                {/* <div className='
                absolute
                top-0
                bottom-0
                left-0
                right-0'>
                    <img src={deviceType==="mobile"?
                        'https://portal.devronins.com/iphone.png':
                        'https://portal.devronins.com/mac.png'
                    } className='w-full h-full'/>
                </div>  */}
                <img
                src={coverImage?.image}
                alt="Your Image"
                className='w-full h-full rounded-lg'/>
            </motion.div>

              <motion.div className='
              absolute
              left-0
              right-0
              bottom-[-25px]
              h-[100px]
              -skew-y-6
              opacity-85
              bg-blue4'>
                 <div className='
                    p-4
                    skew-y-[6deg]
                    w-full
                    h-full
                    flex
                    flex-col
                    items-center
                    justify-center'>
                      <div className='flex mt-[-10px]'>
                        <TypographyH4 title={item?.name} className='text-white group-hover:text-black' />
                      </div>
                    </div>
              </motion.div>
           
        </motion.div>
    )
}

export default PorfolioCard

// https://portal.devronins.com/mac.png
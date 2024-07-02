import { cn } from '../../../lib/utils';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "../../../utils/animation"
import { TypographyH6 } from '../../../components/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../utils/constant';
import { Carousel, CarouselContent, CarouselItem } from '../../../components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import Iphone from "../../../assets/images/iphone-14.png"
import IphoneSkeletonImage from "../../../assets/images/iphone-skeleton.png";
import { ProjectModal, ImageModal } from "../../../reducers/projects";

export function CardCarousel({ items }: { items: ImageModal[] }) {

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            opts={{
                loop: true
            }}
            className=''
        >
            <CarouselContent>
                {items?.map((ele, index)=>(
                     <CarouselItem key={index+1} 
                     className='
                     flex i
                     tems-center 
                     justify-center'>

                        <motion.div 
                        className='
                        flex
                        h-[250px]
                        md:h-[500px]
                        relative'
                        initial={{x: 80, opacity: 0}}
                        whileInView={{x:0, opacity: 100}}
                        exit={{x: -80, opacity: 0}}
                        transition={{duration: 0.5, ease:'easeOut'}}>
                            {ele.type==='iphone'?
                            <img src={Iphone} 
                            className='w-full h-full'/>:
                            <img src='https://portal.devronins.com/mac.png' 
                            className='w-full md:h-full h-auto'/>}

                           {ele.type==='iphone'?
                           <div className='
                           absolute
                           top-[2.3%]
                           right-[5%]
                           left-[5%]
                           bottom-[2.3%]
                           rounded-lg
                           -z-[1]
                           bg-cover
                           bg-center'style={{ backgroundImage: `url(${IphoneSkeletonImage})` }}>
                            <img src={ele.image} className='w-full h-full'/>
                           </div>:
                           <div className='
                           absolute
                           top-[5.5%]
                           right-[11.8%]
                           left-[11.8%]
                           bottom-[11.4%]'>
                               <img src={ele.image} className='w-full h-full'/>
                           </div>}
                        </motion.div>
                     
                 </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

const PorfolioCard1 = ({ item }: { item: ProjectModal }) => {
    return (
        <div
            className='
            w-full
            h-full
            flex
            flex-col
            gap-5
            items-center
            justify-center'
            key={item.id}>
            <CardCarousel items={item.images} />
            <div className='
            flex 
            items-center
            justify-center'>
                <TypographyH6 title={item?.name} />
            </div>
        </div>
    )
}

export default PorfolioCard1

// https://portal.devronins.com/mac.png
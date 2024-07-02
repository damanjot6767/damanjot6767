import React, { useEffect } from 'react'
import { TypographyH3, TypographyP } from '../ui/Typography'
import { motion, useAnimation } from "../../utils/animation"
import { CarouselDApiDemo } from './review_carousel'
import worldmap from "../../assets/images/worldmap.jpg"
import womenImage from "../../assets/images/woman.png"
import { useAppDispatch, useTypedSelector } from '../../stateStore'
import { getClientReviews } from '../../services'


const Reviews = () => {
    const dispatch = useAppDispatch()
    const { loading, error, client_reviews } = useTypedSelector((state) => state.ClientReview)


    useEffect(() => {
        dispatch(getClientReviews())
    }, [])

    return (
        <div className='
        w-full
        h-full
        relative
        mb-20'>

            <div className='
            xl:w-[80%] 
            xl:m-auto '>
                <div className="
                flex
                flex-col
                items-center
                h-auto
                lg:px-20 
                px-5
                pt-20
                gap-10
                xl:w-[55%]
                lg:w-[75%]
                mx-auto
                ">
                    {/* Header section */}
                    <div className="
                z-10
                flex
                flex-col
                gap-3
                ">
                        <div className='
                    flex
                    items-center
                    gap-5
                    text-primary-foreground'>
                            <span className='h-[9px] w-[9px] bg-primary rounded-full' />
                            <TypographyH3 title='Client’s Testimonials' />
                            <span className='h-[9px] w-[9px] bg-primary rounded-full' />
                        </div>

                        <div
                            className="
                        text-[30px]
                        font-bold 
                        lg:text-[45px]
                        md:leading-[60px]
                        leading-[45px]">
                            Our Awesome
                            <span className="text-primary-foreground">{" Clients Review "}</span>
                            For Inspiration.
                        </div>

                        <div className='
                    flex
                    items-center
                    justify-center
                    text-secondary-foreground'>
                            <TypographyP
                                title='We’ve been lucky to collaborate with a long list of customers, located in and out of the country. Thanks to them we have grown as professionals.'
                                className='text-xl font-[250]' />
                        </div>

                    </div>

                    {/* Steps section */}
                    <div className='
                z-10
                w-full
                flex
                items-center
                justify-center'>
                        <CarouselDApiDemo data={client_reviews} />
                    </div>

                    {/* Background Image */}
                    <div className='
                w-full
                h-full
                absolute
                opacity-[0.1]'>
                        <img src={worldmap} className='w-full h-full' />
                    </div>
                </div>
            </div>

            {/* Women background Image */}
            <div className='
            hidden
            lg:block
            absolute
            top-0
            h-full
            w-[25%]'>
                <img src={womenImage} className='w-full h-full' />
            </div>

            {/* background gradient */}
            <div className='
            h-[20%]
            w-[15%]
            gradient4
            absolute
            top-[5%]
            right-[5%]
            blur-[100px]'>

            </div>
        </div>
    )
}

export default React.memo(Reviews)
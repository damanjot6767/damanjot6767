import React, { useEffect } from 'react'
import { TypographyH3, TypographyP } from '../ui/Typography'
import { motion, useAnimation } from "../../utils/animation"
import { CarouselDApiDemo } from './review_carousel'
import worldmap from "../../assets/images/worldmap.jpg"
import womenImage from "../../assets/images/woman.png"
import { useAppDispatch, useTypedSelector } from '../../stateStore'
import { getClientReviews } from '../../services'

const client_reviews = [
    {
        "image_url": "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/10/grid-testimonial-01-154x154.png",
        "name": "Sachin Diwar",
        "rating": "5",
        "description": "“ITo helped the client achieve their goal of calling the attention of mobile network operators. The expert team was also able to develop an app with commendable UI/UX. The client appreciates their flexibility in terms.”",
        "title": "CEO/ Founder",
        "id": "1"
    },
    {
        "1": "2",
        "image_url": "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/10/grid-testimonial-05-154x154.png",
        "name": "VP of Network",
        "rating": "5",
        "description": "“Working with several word press themes and templates the last years, I only can say this is the best in every level. I use it for my company and the reviews that I have already are all excellent. Support is helping to fix my issues now.”",
        "title": "CFO "
    },
    {
        "image_url": "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h2-testimonial1-154x154.jpg",
        "name": "Arnold Burner",
        "description": "“ITo helped the client achieve their goal of calling the attention of mobile network operators. The expert team was also able to develop an app with commendable UI/UX. The client appreciates their flexibility in terms.”",
        "title": "CEO & founder",
        "rating": 5,
        "id": "3"
    }
]

const Reviews = () => {

    return (
        <div 
        id="reviews"
        className='
        w-full
        h-full
        relative
        mb-20
        pt-20'>

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
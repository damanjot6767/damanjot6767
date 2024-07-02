import React, { useEffect } from 'react'
import { TypographyH2, TypographyH3, TypographyH4, TypographyP } from '../ui/Typography'
import { motion, useAnimation } from "../../utils/animation"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FiSend, IoLocation, BsTelephoneFill } from "../../utils/icons"
import { useAppDispatch, useTypedSelector } from '../../stateStore'
import { getDevroninsDetails } from '../../services'
import { SocialLinks } from '../common/socialLinks'
import { useNavigate } from 'react-router-dom'
import { RoutesName } from '../../utils/constant'

const images = [
    "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/theme4.jpg",
    "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service7-600x678.jpg",
    "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service2-800x570.jpg",
    "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service4-800x570.jpg",
    "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service8-600x678.jpg",
    "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service3-800x570.jpg"
]

const Footer = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { devroninsDetails, error, devroninsDetailsLoading} = useTypedSelector((state)=> state.Devronins);

    useEffect(()=>{
        dispatch(getDevroninsDetails())
    },[])

    return (
        <div className='
        w-full
        relative
        bg-darkblue1
        h-auto'>

            {/* Footer top section */}
            <div className='
            w-full
            bg-darkblue2
            px-5
            py-7'>
                <div className='
                mx-auto
                xl:w-[lg]
                lg:px-20 
                flex
                flex-col
                md:flex-row
                md:items-center
                gap-5
                justify-between'>
                    <div className='
                flex
                flex-col
               '>
                        <TypographyH2
                            title='Looking for the Best IT Business Solutions?'
                            className='text-white tracking-normal font-semibold'
                        />
                        <div className='
                        flex
                        items-center
                        '>
                            <TypographyP
                                title='As a app web crawler expert, We will help to organize.'
                                className='text-white font-light opacity-65' />
                        </div>
                    </div>

                    <div className='flex'>
                        <button className="
                        w-[auto]
                        py-3
                        px-8
                        gradient3
                        rounded-full
                        group
                        transition-all
                        duration-200
                        hover:gradient5"
                        onClick={()=> navigate(RoutesName.Contact)}>
                            <TypographyH4 className="font-[500] text-md text-white" title="Get a quote" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Middle section */}
            <div className='
            w-full
            px-5
            lg:py-20
            py-10'>
                <div className='
                mx-auto
                xl:w-[lg]
                lg:px-20 
                grid
                lg:grid-cols-4
                gap-5'>

                    <div className="
                    flex
                    flex-col
                    gap-5
                    ">
                        <div className='
                        flex
                        items-center
                        '>
                            <img
                                src="https://www.devronins.com/images/DevRonins.png"
                                className="object-contain max-w-[150px]"
                            />
                        </div>

                        <div className='flex'>
                            <TypographyP
                                title='We work with a passion of taking challenges and creating new ones in advertising sector.'
                                className='text-sm leading-normal text-white font-light opacity-65' />
                        </div>

                        <div className='flex'>
                            <button className="
                            w-[auto]
                            py-1
                            px-3
                            gradient3
                            rounded-full
                            group
                            transition-all
                            duration-200
                            hover:gradient5"
                            onClick={()=> navigate(RoutesName.OurServices)}>
                                <TypographyP className=" text-sm text-white" title="About us" />
                            </button>
                    </div>

                    </div>

                    <div className="
                    flex
                    flex-col
                    gap-4
                    ">
                         <div className='
                        flex
                        items-center
                        '>
                            <TypographyH4 title='Newsletter' className='text-white'/>
                        </div>

                        <div className='flex'>
                            <TypographyP
                                title='Subscribe our newsletter to get our latest update & news.'
                                className='text-sm leading-normal text-white font-light opacity-65' />
                        </div>

                        <div className="flex w-full max-w-sm items-center">
                            <Input className='bg-darkblue2 w-[80%] rounded-none border-0 focus-visible:ring-offset-0 text-white' type="email" placeholder="Email" />
                            <Button className='w-[20%] bg-primary rounded-none' type="submit"><FiSend size={20} className='text-white'/></Button>
                        </div>

                        <div className='flex'>
                            <TypographyP
                                title='Please select at least one list.'
                                className='text-sm leading-normal text-white font-light opacity-65' />
                        </div>

                        {/* Social links */}

                        <div className="
                        flex
                        items-center
                        gap-3">
                           {devroninsDetails?.social_links?
                           <SocialLinks items={devroninsDetails.social_links}/>:
                           null}
                        </div>
                    </div>

                    <div className="
                    flex
                    flex-col
                    gap-3
                    ">
                         <div className='
                        flex
                        items-center
                        '>
                            <TypographyH4 title='Official info:' className='text-white'/>
                        </div>

                        <div className='flex gap-2 items-center'>
                           <div className='flex'>
                             <IoLocation size={20} className='text-primary'/>
                           </div>
                           <div className='flex'>
                           <TypographyP
                                title={devroninsDetails?.address}
                                className='text-sm leading-normal text-white font-light opacity-65' />
                           </div>
                        </div>

                        <div className='flex gap-3 items-center'>
                           <div className='flex ml-1'>
                             <BsTelephoneFill size={14} className='text-primary'/>
                           </div>
                           <div className='flex'>
                           <TypographyP
                                title={devroninsDetails?.contact_no}
                                className='text-sm leading-normal text-white font-light opacity-65' />
                           </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <div className='flex'>
                                <TypographyP
                                title='Open Hours:'
                                className='text-sm leading-normal text-white' />
                            </div>
                            <div className='flex'>
                                <TypographyP
                                title={devroninsDetails?.open_hours}
                                className='text-sm leading-normal text-white font-light opacity-65' />
                            </div>
                        </div>
                    </div>

                    <div className="
                    flex
                    flex-col
                    gap-3
                    ">
                         <div className='
                        flex
                        items-center
                        '>
                            <TypographyH4 title='Gallery' className='text-white'/>
                        </div>

                        <div className='grid grid-cols-3 gap-2'>
                            {images?.map((ele, index)=>(
                                <div key={index} className='h-[65px] bg-gray-400'>
                                    <img src={ele} className='h-full w-full' alt='imgaes'/>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer bottom section */}
            <div className='
            w-full
            px-5
            py-7'>
                <div className='
                border-t-[1px]
                border-primary
                mx-auto
                xl:w-[55%]
                lg:w-[80%]
                flex
                items-center
                justify-center'>
                    <div className='
                    flex
                    flex-col
                    mt-2
                    '>
                       
                    <TypographyP
                        title='© 2024 Itfirm – CaseThemes. All rights reserved.'
                        className='text-white font-light' />

                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
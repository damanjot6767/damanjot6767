import React, { useEffect } from 'react';
import { motion } from "../../../utils/animation"
import contactBackgroudImage from "../../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH4, TypographyH5, TypographyP } from '../../../components/ui/Typography';
import { IoLocation, MdKeyboardDoubleArrowRight, FaFacebookF, FaTwitter, FaInstagram } from "../../../utils/icons"
import { RoutesName } from '../../../utils/constant';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { useAppDispatch, useTypedSelector } from '../../../stateStore';
import { getProjects } from '../../../services';
import { LoadingErrorWrapper } from '../../../components/common/loading_error_wrapper';
import PorfolioCard from './porfolio_card';

const OurLandingPortfolio = () => {

  const navigate = useNavigate();
  const { projects, projectListLoading, error} = useTypedSelector((state)=> state.Projects);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getProjects())
  },[]);

  return (
    <LoadingErrorWrapper loading={projectListLoading}>
      <div className='w-full h-full'>

      {/* contact main section */}
      <div className='
      flex
      flex-col'>
        {/* Portfolio Background image section */}
        <div className='
        relative
        flex
        items-center
        justify-center'>
          <img src={contactBackgroudImage} className='h-[200px] lg:h-[300px]' />

          <div className='
          absolute
          flex
          items-center
          justify-center
          w-full
          h-full
          '>
            <div className='
              flex
              flex-col
              items-center
              gap-2
              '>
              <div className='flex text-white'>
                <TypographyH1 title='Our Portfolio' className='font-semibold' />
              </div>
              <div className='flex items-center gap-2 text-white'>
                <div
                  className='flex cursor-pointer transition-all hover:text-primary-foreground'
                  onClick={() => navigate(RoutesName.Home)}>
                  <TypographyP title='Home' className='opacity-85 ' />
                </div>

                <MdKeyboardDoubleArrowRight size={20} className='text-primary-foreground' />

                <div className='flex'>
                  <TypographyP title='Our Portfolio' className='opacity-85' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='
        flex
        flex-col
        w-full
        relative
        overflow-hidden
        lg:gap-20
        gap-10
        items-center
        px-5
        pt-20
        pb-20'>

            {/* Portfolio Header section */}
            <div className='
                flex
                justify-center
                items-center
                xl:w-[25%]
                lg:w-[50%]
                md:w-[60%]'>
              <div
                className="
                text-center
                    text-3xl
                    font-bold 
                    lg:text-4xl">
                We provide the necessary
                <span className="text-primary-foreground">{" services "}</span>
                to you
              </div>
            </div>
        

           {/* portfolio section */}
            <div className='
            relative
            xl:w-[75%] 
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-3
            md:grid-cols-2
            items-center
            h-auto
            gap-10
            '>
              {projects?.map((item, index)=>(
                <PorfolioCard item={item} index={index}/>
              ))}
            </div>

            {/* portflio gradient background */}
            <motion.div className='
            absolute
            top-0
            bottom-0
            left-0
            right-0
            gradient1
            -z-[10]
            blur-[100px]'
            animate={{rotate: 360}}
            transition={{duration: 20, ease:'linear', repeat: Infinity}}/>
             {/* portflio gradient background */}
             <motion.div className='
            absolute
            top-0
            bottom-0
            left-0
            right-0
            gradient1
            -z-[10]
            blur-[100px]'
            initial={{rotate: 180}}
            animate={{rotate: 540}}
            transition={{duration: 20, ease:'linear', repeat: Infinity}}/>
        </div>
      </div>
    </div>
    </LoadingErrorWrapper>
  )
}

export default OurLandingPortfolio
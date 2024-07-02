import React, { useEffect } from 'react';
import { motion } from "../../utils/animation"
import contactBackgroudImage from "../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH4, TypographyH5, TypographyP } from '../ui/Typography';
import { IoLocation, MdKeyboardDoubleArrowRight } from "../../utils/icons"
import { RoutesName } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-full'>
      {/* contact main section */}
      <motion.div className='
        flex
        flex-col'
        initial={{opacity: 0}}
        animate={{opacity: 100}}
        transition={{duration: 0.4}}>
        {/* Error Background image section */}
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
                <TypographyH1 title='404' className='font-semibold' />
              </div>
              <div className='flex items-center gap-2 text-white'>
                <div
                  className='flex cursor-pointer transition-all hover:text-primary-foreground'
                  onClick={() => navigate(RoutesName.Home)}>
                  <TypographyP title='Home' className='opacity-85 ' />
                </div>

                <MdKeyboardDoubleArrowRight size={20} className='text-destructive' />

                <div className='flex cursor-pointer transition-all hover:text-primary-foreground'>
                  <TypographyP title='Not Found' className='opacity-85 ' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Image Main section */}
        <div className='
        xl:w-[lg] 
        flex
        flex-col
        items-center
        h-auto
        px-5
        pt-20
        lg:px-20
        pb-20
        lg:gap-20
        gap-10
        '>
          <img src={'https://demo.casethemes.net/itfirm/wp-content/themes/itsoft/assets/images/image-404.jpg'} 
          alt='404 image' 
          className=' xl:w-[55%] lg:w-[70%] h-[90%]'/>

          <div className='flex'>
            <button className="
            w-[auto]
            md:py-3
            md:px-8
            py-2
            px-6
            gradient3
            rounded-full"
            onClick={()=> navigate(RoutesName.Home)}>
                <TypographyP className="md:text-lg text-white" title="Go Back Home!" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default NotFoundPage

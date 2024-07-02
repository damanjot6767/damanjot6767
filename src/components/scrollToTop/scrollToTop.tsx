import React, { useEffect, useMemo } from 'react';
import { cn } from '../../lib/utils';
import useScrollHook from '../../hooks/useScrollbar'
import { motion } from "../../utils/animation"
import { GoArrowRight} from "../../utils/icons"
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const {scrolled: isScrolled, handleScrollToTop} = useScrollHook();
    const pathname = useLocation()

    useEffect(()=>{
        handleScrollToTop()
        console.log('working')
    },[pathname])

    return (
        <div className={cn("fixed bottom-[30px] right-[0px] z-20", isScrolled && "block")}>
            <motion.div className='
            flex
            items-center
            justify-center
            p-2
            gradient3'
            onClick={handleScrollToTop}
            onTap={handleScrollToTop}
            initial={{x: 40}}
            animate={{x:isScrolled?0:40}}
            exit={{x: !isScrolled?0:40}}
            transition={{duration:0.4}}>
                <GoArrowRight size={20} className='text-white rotate-[270deg]'/>
            </motion.div>
        </div>
    )
}

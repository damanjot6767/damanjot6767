import React, { useEffect } from 'react';
import { motion } from "../../../utils/animation"
import contactBackgroudImage from "../../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from '../../../components/ui/Typography';
import { IoLocation, MdKeyboardDoubleArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaCheckCircle } from "../../../utils/icons"
import { RoutesName } from '../../../utils/constant';
import { useNavigate, useParams } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { useAppDispatch, useTypedSelector } from '../../../stateStore';
import { getProjectById } from '../../../services';
import { LoadingErrorWrapper } from '../../../components/common/loading_error_wrapper';
import PorfolioCard1 from './porfolio_card1';
import PlayStore from '../../../assets/images/play-app-store.png'
import { BsBrowserChrome, FaAppStoreIos, FaGooglePlay } from "../../../utils/icons"
import { Tilt } from '../../../utils/parallax';

  const addtionalSkills = [
    {
      id: '1',
      type: "web",
      description: 'Available on website'
    },
    {
      id: '2',
      type: "ios",
      description: 'Download from Ios App Store'
    },
    {
      id: '3',
      type: "android",
      description: 'Download from Play Store'
    },
  ]



const OurLandingPortfolioDetails = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const { project, projectItemLoading, error} = useTypedSelector((state)=> state.Projects);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(
      getProjectById({ 
        projectId: id, 
        navigate: ()=> navigate(RoutesName.NotFound)
      }))
  },[]);

  return (
    <LoadingErrorWrapper loading={projectItemLoading}>
      <div className='w-full h-full'>

      {/* contact main section */}
      <div className='
      flex
      flex-col'>
        {/* Contact Background image section */}
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

                <div className='flex'
                onClick={()=> navigate(-1)}>
                  <TypographyP title='Our Portfolio' className='opacity-85' />
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Details Main section */}
        <div className='
        relative
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
            {/* portfolio project images */}
            <div className='
            w-full
            h-full
            flex
            items-center
            justify-center'>
                {project?<PorfolioCard1 item={project}/>:null}
            </div>

          {/* porfolio detail section */}
          <div className='
            w-full
            lg:w-[85%]
            flex
            flex-col
            gap-10
            p-5
            lg:p-10
            bg-white
            shadow-lg'>
           
            <div className='
                w-full
                flex
                flex-col
                lg:flex-row
                gap-8
                lg:items-center
                '>

              {/* Description section */}
              <div className='
                     flex
                     flex-col
                     gap-8
                     '>
              
                <div className='
                    flex
                    flex-col
                    gap-5'>

                  <div className='flex -mb-3'>
                    <TypographyH2 title={'Description'} className='font-bold lg:text-4xl text-2xl' />
                  </div>

                  <div className='flex max-h-[300px] overflow-auto'>
                    <div
                      dangerouslySetInnerHTML={{__html: project?.description || ""}}
                      className='text-muted-foreground' />
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Technology section */}
        <div className='
         bg-secondary
         py-10
         pb-20
         px-5
         lg:px-20
         w-full
         flex
         flex-col
         items-center
         justify-center
         gap-10'>

          <div className='
          flex
          items-center
          gap-5
          text-primary-foreground'>
              <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
              <TypographyH2 title={'Technology'} className='font-bold lg:text-4xl text-2xl' />
              <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
          </div>

          <div className='
          flex
          flex-wrap
          lg:gap-10
          gap-5
          items-center'>
            {project?.technologies?.map((technology, index)=>(
              <motion.div 
              className='
              relative
              p-4 
              bg-white 
              rounded-lg 
              shadow-lg 
              flex
              flex-col
              gap-1
              items-center'
              initial={{x:70,opacity: 0}}
              whileInView={{x:0, opacity: 100}}
              transition={{duration: 0.7, delay: 0.3*index, ease:'easeIn'}}
              viewport={{once: true}}>
              <img src={technology.icon} className='w-[100px] h-[100px]'/>
              <div className=''>
                <TypographyP title={technology.title} className='font-semibold' />
              </div>

              <motion.div
              className='absolute border-[1px] border-primary top-0 left-0 right-0'
              whileInView={{width:['0%', '50%', '100%']}}
              transition={{duration: 1, ease:'linear'}}/>
               <motion.div
              className='absolute border-[1px] border-primary top-0 bottom-0 right-0'
              whileInView={{height:['0%', '50%', '100%']}}
              transition={{duration: 1, ease:'linear'}}/>
              <motion.div
              className='absolute border-[1px] border-primary left-[100%] bottom-0 right-0'
              whileInView={{left:['100%', '50%', '0%']}}
              transition={{duration: 1, ease:'linear'}}/>
              <motion.div
              className='absolute border-[1px] border-primary top-[100%] bottom-0 left-0'
              whileInView={{top:['100%', '50%', '0%']}}
              transition={{duration: 1, ease:'linear'}}/>
            </motion.div>
            ))}
          </div>
        </div>

         {/* platform card section */}
         <div className='
         relative
         py-10
          px-5
          lg:px-20
          w-full
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          bg-background1
          items-center'>
            <motion.div 
            className='w-full z-[10]'
            initial={{x:-50, opacity: 0}}
            whileInView={{x: 0, opacity: 100}}
            transition={{duration: 0.7, ease:'easeIn'}}
            viewport={{once: true}}>
             <Tilt>
               <img src={PlayStore} className='w-full md:h-[650px]'/>
             </Tilt>
            </motion.div>

            <div className='
                flex
                flex-col
                gap-5
                z-[10]'>

               <div className='
                flex
                items-center
                gap-5
                text-primary-foreground'>
                    <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
                    <TypographyH2 title={'Available Platforms'} className='font-bold lg:text-4xl text-2xl' />
                    <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
                </div>

              <div className='
                flex
                flex-col
                gap-5
                lg:gap-7'>
                {addtionalSkills?.map(({id, type, description}, index) => (
                  <motion.div 
                  key={id}
                  className='flex gap-5 items-center group'
                  initial={{x:50, opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  transition={{duration: 0.7, delay: 0.1*index, ease:'easeIn'}}
                  viewport={{once: true}}>
                    <div className='flex group-hover:animate-bounce text-blue-500'>
                      {/* <FaCheckCircle size={20} /> */}
                      {type==='ios'?
                      <FaAppStoreIos className='w-8 h-8 lg:w-12 lg:h-12'/>
                      :type==='web'?
                      <BsBrowserChrome className='w-8 h-8 lg:w-12 lg:h-12'/>
                      :type==='android'?
                      <FaGooglePlay className='w-8 h-8 lg:w-12 lg:h-12'/>
                      :null
                      }
                    </div>
                    <div className='flex'>
                      <TypographyP
                        title={description}
                        className='font-semibold text-blue-500 underline' />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div className='
            absolute
            top-[20%]
            right-0
            h-[60%]
            w-[40%]
            gradient4
            blur-[100px]
            opacity-50'
            animate={{scale: [0.7, 1, 0.7]}}
            transition={{duration: 2, ease: "linear",
            repeat: Infinity,}}/>
              
          </div>
      </div>
    </div>
    </LoadingErrorWrapper>
  )
}

export default OurLandingPortfolioDetails
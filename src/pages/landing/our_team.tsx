import React, { useEffect } from 'react';
import { motion } from "../../utils/animation"
import contactBackgroudImage from "../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH4, TypographyH5, TypographyP } from '../../components/ui/Typography';
import { IoLocation, MdKeyboardDoubleArrowRight, FaFacebookF, FaTwitter, FaInstagram } from "../../utils/icons"
import { RoutesName } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useAppDispatch, useTypedSelector } from '../../stateStore';
import { getTeamMembers } from '../../services';
import { LoadingErrorWrapper } from '../../components/common/loading_error_wrapper';



const LandingOurTeam = () => {

  const navigate = useNavigate();
  const { teamMembers, teamMembersListLoading, error} = useTypedSelector((state)=> state.TeamMember);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getTeamMembers())
  },[]);

  return (
    <LoadingErrorWrapper loading={teamMembersListLoading}>
      <div className='w-full h-full'>

      {/* contact main section */}
      <div className='
    flex
    flex-col
    '>
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
                <TypographyH1 title='Our Team' className='font-semibold' />
              </div>
              <div className='flex items-center gap-2 text-white'>
                <div
                  className='flex cursor-pointer transition-all hover:text-primary-foreground'
                  onClick={() => navigate(RoutesName.Home)}>
                  <TypographyP title='Home' className='opacity-85 ' />
                </div>

                <MdKeyboardDoubleArrowRight size={20} className='text-primary-foreground' />

                <div className='flex'>
                  <TypographyP title='Our Team' className='opacity-85' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Main section */}
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
          <div className='
          flex
          flex-col
          items-center
          gap-10'>

            {/* Team Header section */}
            <div className='
                flex
                justify-center
                items-center
                lg:w-[70%]'>
              <div
                className="
                text-center
                    text-3xl
                    font-bold 
                    lg:text-4xl">
                Passionate Personalities,
                <span className="text-primary-foreground">{" Versatile "}</span>
                Brains
              </div>
            </div>
          </div>

          <div className='
            w-full
            lg:w-[85%]
            grid
            lg:grid-cols-4
            sm:grid-cols-2
            gap-10'>
            {teamMembers?.map((ele, index) => (
              <motion.div  
              key={ele.id}
              className='flex relative group w-full shadow-lg'
              initial={{y: 10, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              viewport={{once: true}}
              transition={{duration:0.3, delay: 0.2*index}}>
                <div
                  className='h-[370px] relative overflow-hidden hover:border-primary hover:border w-full'>
                  {/* Image Section */}
                  <img src={ele.image_url} className='w-full h-full' />

                  {/* Introduction section */}
                  <div className='
                  absolute
                  bottom-[-20px]
                  left-0
                  right-0
                  w-full
                  h-[120px]
                  bg-black
                  opacity-85
                  skew-y-[-6deg]
                  group-hover:bg-white
                  group-hover:opacity-100'>
                    <div className='
                    p-4
                    skew-y-[6deg]
                    w-full
                    h-full
                    flex
                    flex-col
                    items-center'>
                      <div className='flex'>
                        <TypographyH4 title={ele?.name} className='text-white group-hover:text-black' />
                      </div>
                      <div className='flex'>
                        <TypographyH5 title={ele?.title} className='text-primary-foreground' />
                      </div>
                    </div>
                  </div>

                   {/* On hover div */}
                  <div className='
                  hidden
                  absolute
                  top-[-20px]
                  left-0
                  right-0
                  bottom-[100px]
                  skew-y-[-6deg]
                  z-[15]
                  opacity-95
                  group-hover:block
                  group-hover:bg-primary
                 '/>

                  <motion.div className='
                    hidden
                    absolute
                    top-[-20px]
                    bottom-[100px]
                    left-0
                    right-0
                    z-[16]
                    group-hover:flex
                    flex-col
                    items-center
                    justify-center
                    py-10
                    px-5
                    gap-5'
                    initial={{y: 40}}
                    whileInView={{y:0}}
                    transition={{duration: 0.4}}>
                       <div className='flex text-center'>
                        <TypographyH5 title={ele?.description} className='text-white font-[400]' />
                      </div>

                      <div onClick={()=> navigate(RoutesName.OurTeam+"/"+ele?.id)} className='flex'>
                        <TypographyH5 title={'Read more'} className='text-white p-2 px-3 bg-destructive ' />
                      </div>
                    </motion.div>
                </div>

                 {/* social link section */}
                 <div className='
                  absolute
                  left-1/2
                  transform -translate-x-1/2
                  top-[94%]
                  z-[20]
                  '>
                    <div className='
                    flex
                    items-center
                    justify-center
                    bg-white'>
                    {ele.social_links?.map(({id, social_link, social_type}, index)=>(
                          <div 
                            key={id}
                            className={cn("flex border group-hover:border-primary p-3 px-3",
                            ele.social_links!==null && index<ele.social_links?.length-1 &&"border-r-0"
                            )}>
                            {social_type === 'facebook' ? (
                            <FaFacebookF
                              className="h-[15px] text-border transition-all cursor-pointer hover:text-primary-foreground"
                              onClick={() => window.open(social_link, '_blank')}
                            />
                            ) : social_type === 'twitter' ? (
                            <FaTwitter
                              className="h-[15px] text-border transition-all cursor-pointer hover:text-primary-foreground"
                              onClick={() =>  window.open(social_link, '_blank')}
                            />
                            ) : social_type==='instagram'?(
                            <FaInstagram
                              className="h-[15px] text-border transition-all cursor-pointer hover:text-primary-foreground"
                              onClick={() => window.open(social_link, '_blank')}
                            />
                            ):null}
                          </div>
                    ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </LoadingErrorWrapper>
  )
}

export default LandingOurTeam
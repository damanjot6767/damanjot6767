import React, { useEffect } from 'react';
import { motion } from "../../utils/animation"
import contactBackgroudImage from "../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH2, TypographyH4, TypographyH5, TypographyH6, TypographyP } from '../../components/ui/Typography';
import { IoLocation, MdKeyboardDoubleArrowRight, IoPlanetOutline, FiPhone, TbAward, MdMoneyOff, SiNamecheap, FaLink } from "../../utils/icons"
import { RoutesName } from '../../utils/constant';
import { useLocation, useNavigate, useParams} from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useAppDispatch, useTypedSelector } from '../../stateStore';
import { getServiceById, getServices } from '../../services';
import { LoadingErrorWrapper } from '../../components/common/loading_error_wrapper';



const LandingOurServiceDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const dispatch = useAppDispatch()
  const { serviceItemLoading, serviceListLoading, error, services, service: serviceDetails} = useTypedSelector((state)=> state.Services);

  useEffect(()=>{
    dispatch(getServiceById({ serviceId: id, navigate: ()=> navigate(RoutesName.NotFound)}))
  },[id])

  useEffect(()=>{
    dispatch(getServices())
  },[])

  return (
    <LoadingErrorWrapper loading={serviceItemLoading || serviceListLoading}>
      <div className='w-full h-full'>

      {/* service details main section */}
      <div className='
        flex
        flex-col
        '>
        {/* Background image section */}
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
                <TypographyH1 title={serviceDetails?.name || "n/a"} className='font-semibold' />
              </div>
              <div className='flex items-center gap-2 text-white'>
                <div
                  className='flex cursor-pointer transition-all hover:text-primary-foreground'
                  onClick={() => navigate(RoutesName.Home)}>
                  <TypographyP title='Home' className='opacity-85 ' />
                </div>

                <MdKeyboardDoubleArrowRight size={20} className='text-destructive' />

                <div
                  className='flex cursor-pointer transition-all hover:text-primary-foreground'
                  onClick={() => navigate(RoutesName.OurServices)}>
                  <TypographyP title='Services' className='opacity-85 ' />
                </div>

                <MdKeyboardDoubleArrowRight size={20} className='text-destructive' />

                <div className='flex'>
                  <TypographyP title={serviceDetails?.name || "n/a"} className='opacity-85' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* infromation section */}
        <div className='
        relative
        xl:w-[lg] 
        flex
        flex-col
        h-auto
        px-5
        pt-20
        lg:px-20
        pb-20
        lg:gap-20
        gap-10
        '>
          <div className='
          mx-auto
          lg:w-[85%]
          flex
          lg:flex-row
          flex-col
          gap-5'>

            {/* left section */}
            <div className='
            lg:h-[870px]
            lg:w-[35%]
            flex
            flex-col
            items-center
            justify-center
            gap-5'>
                {/* all available service section */}
                <div className='
                w-full
                flex
                flex-col
                gap-2
                items-center
                justifycenter
                h-[320px]
                overflow-y-auto 
                scrollbar-none'>
                    {services?.map((ele,index)=>(
                       <div
                        key={ele.id} 
                        onClick={()=> navigate(RoutesName.OurServices+"/"+ele?.id)}  
                        className='flex w-full bg-card py-[14px] px-10'>
                         <TypographyH6 title={ele?.name || "n/a"} className='text-black' />
                       </div>
                    ))}
                </div>

                {/* contact section */}
                <div className='relative w-full h-[62%]'>
                    <img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/bg-info-box1.jpg"
                    className='w-full lg:h-full h-[60%]'/>

                    <div className='
                    absolute
                    top-0
                    bottom-0
                    left-0
                    right-0
                    flex
                    items-center
                    justify-center'>
                        <div className='
                        w-full
                        flex
                        flex-col
                        md:gap-4
                        gap-3
                        justify-center
                        items-center'>
                            <div className='flex'>
                                <TypographyP title='Contact us now' className='text-lightblue1 font-semibold'/>
                            </div>
                            <div className='flex border-b border-primary pb-2'>
                                <TypographyH2 title='If need help!' className='text-white font-[400] md:text-4xl text-3xl'/>
                            </div>
                            <div className='flex '>
                                <TypographyH2 title='557-3452-234' className='text-white md:text-4xl text-3xl'/>
                            </div>
                            <div className='flex -mt-2'>
                                <TypographyP title='or go to contact form:' className='text-white text-xl font-semibold'/>
                            </div>

                            <div className='flex'>
                                <div className='flex py-2 px-4 md:py-3 md:px-6 bg-white'>
                                  <TypographyP title="Let's start now" className=' font-semibold'/>
                                </div>
                                <div className='flex bg-primary items-center px-3 md:px-5'
                                onClick={()=> navigate(RoutesName.Contact)}>
                                    <FaLink size={15} className='text-white'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

              {/* right section */}
              <div className='
               scrollbar-none
                overflow-y-auto
                lg:h-[870px]
                lg:w-[65%]
                flex
                flex-col
                items-center
                lg:gap-10
                gap-5'>

                {/* service image section */}
                <div className='
                w-full
                flex'>
                    <img src={serviceDetails?.image_url}
                    className='lg:h-full w-full h-[50%]'/>
                </div>

                 {/* Addition infromation */}

                 <div className='
                w-full
                flex
                flex-col
                lg:flex-row
                gap-8
                lg:items-center
                '>
                    {/* service detail Additional infromation section */}
                    <div className='
                        flex
                        flex-col
                        gap-5'>

                           <div className='flex -mb-3'>
                             <TypographyH2 title={'Information'} className='font-bold text-4xl'/>
                           </div>

                           <div className='flex'>
                             <TypographyP 
                             title={serviceDetails?.infromation || "n/a"} 
                             className='text-muted-foreground'/>
                           </div>
                    </div>
                </div>

                 {/* service detail support */}
                 <div className='
                    w-full
                    flex
                    lg:flex-row
                    flex-col
                    gap-5'>

                    <div className='
                    flex
                    w-full 
                    h-[150px]
                  bg-black
                    items-center'>
                        <div className='
                        h-[60%]
                        w-[80%]
                        flex
                        itmes-center
                        justify-center
                        mx-auto
                        gap-5
                        '>
                            <div className='flex justify-center'>
                              <IoPlanetOutline size={35} className='text-primary'/>
                            </div>

                            <div className='
                            flex
                            flex-col
                            gap-5
                            justify-center
                            -mt-3'>

                                <div className='-mb-3'>
                                    <TypographyH6 title={'Why It soft?'} className='md:text-2xl text-white text-lg'/>
                                </div>

                                <div className=''>
                                    <TypographyP 
                                    title={"We're making room for self care today with plan."} 
                                    className='text-muted-foreground font-semibold leading-5'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='
                    flex
                    w-full 
                    h-[150px]
                  bg-black
                    items-center'>
                        <div className='
                        h-[60%]
                        w-[80%]
                        flex
                        itmes-center
                        justify-center
                        mx-auto
                        gap-5
                        '>
                            <div className='flex justify-center'>
                              <FiPhone size={30} className='text-primary' />
                            </div>

                            <div className='
                            flex
                            flex-col
                            gap-5
                            justify-center
                            -mt-3'>

                                <div className='-mb-3'>
                                    <TypographyH6 title={'Unlimited support'} className='md:text-2xl text-white text-lg'/>
                                </div>

                                <div className=''>
                                    <TypographyP 
                                    title={"New range coming in on a weekly basis veg section."} 
                                    className='text-muted-foreground font-semibold leading-5'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* another infromation section */}
                 <div className='
                 w-full
                 flex
                 lg:flex-row
                 flex-col
                 gap-5
                 lg:items-center'>
                    <div className='flex lg:w-[50%]'>
                        <img src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/theme4.jpg'
                        className='w-full lg:h-full h-[80%]'/>
                    </div>
                    <div className='
                        lg:w-[50%]
                        flex
                        flex-col
                        gap-5'>

                           <div className='flex -mb-3'>
                             <TypographyH2 title={'We serve the best work'} className='font-bold text-3xl md:text-2xl'/>
                           </div>

                           <div className='flex'>
                             <TypographyP 
                             title={'By initiating your project with Fingent, you get a dedicated and skilled team backing you up round-the-clock. All our processes are the customer oriented, designed to reduce the cost of business operations.'} 
                             className='text-muted-foreground'/>
                           </div>
                    </div>
                 </div>

                 {/* last section */}
                 <div className='
                 w-full
                 flex
                 lg:flex-row
                 flex-col
                 gap-5'>
                    <div className='
                        flex
                        gap-5'>

                            <div className='flex justify-center items-center bg-black rounded-lg'>
                               <TbAward size={60} className='text-primary p-2'/>
                            </div>

                            <div className='-mb-3'>
                                    <TypographyH6 title={'Best quality support'}/>
                            </div>
                    </div>
                    <div className='
                        flex
                        gap-5'>

                            <div className='flex justify-center items-center bg-black rounded-lg'>
                               <MdMoneyOff size={60} className='text-primary p-2'/>
                            </div>

                            <div className='-mb-3'>
                                    <TypographyH6 title={'Money back guarantee'}/>
                            </div>
                    </div>
                    <div className='
                        flex
                        gap-5'>

                            <div className='flex justify-center items-center bg-black rounded-lg'>
                               <SiNamecheap size={60} className='text-primary p-3'/>
                            </div>

                            <div className='-mb-3'>
                                    <TypographyH6 title={'Cheap price provider'}/>
                            </div>
                    </div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </LoadingErrorWrapper>
  )
}
export default LandingOurServiceDetails
// style="background-image: url(https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/theme4.jpg);"

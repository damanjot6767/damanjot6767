import React, { useEffect } from 'react';
import { motion } from "../../utils/animation"
import contactBackgroudImage from "../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from '../../components/ui/Typography';
import { MdKeyboardDoubleArrowRight, FaCheckCircle, FiPhone, MdOutlineMarkEmailRead, IoLocationOutline, FaFacebookF, FaTwitter, FaInstagram } from "../../utils/icons"
import { RoutesName } from '../../utils/constant';
import { useNavigate, useParams } from 'react-router-dom';
import { Progress } from '../../components/ui/progress';
import { cn } from '../../lib/utils';
import { useAppDispatch, useTypedSelector } from '../../stateStore';
import {  getTeamMemberById, getTeamMembers } from '../../services';
import { LoadingErrorWrapper } from '../../components/common/loading_error_wrapper';



const LandingOurTeamDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const dispatch = useAppDispatch()
  const { teamMemberItemLoading, teamMembersListLoading, error, teamMember} = useTypedSelector((state)=> state.TeamMember);


  const progressData = [
    {
      id: 1,
      title: 'UI/UX',
      value: 90,
      fillColor: "gradient4"
    },
    {
      id: 2,
      title: 'Web Development',
      value: 95,
      fillColor: "gradient7"
    },
    {
      id: 3,
      title: 'App Development',
      value: 80,
      fillColor: "gradient6"
    }
  ]

  const addtionalSkills = [
    'Experienced Attorneys Professional.',
    'Experienced Attorneys Approach.',
    'Independence Makes Difference.',
    'Committed To Helping Our Clients.'
  ]

  useEffect(()=>{
    dispatch(getTeamMemberById({ 
      memberId: id,
      navigate: ()=> navigate(RoutesName.NotFound)
      }))
  },[id])

  useEffect(()=>{
    dispatch(getTeamMembers())
  },[])

  return (
    <LoadingErrorWrapper loading={teamMemberItemLoading || teamMembersListLoading}>
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
                  <TypographyP title='Team Details' className='opacity-85' />
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Team Details Main section */}
        <div className='
        relative
        xl:w-[lg] 
        flex
        flex-col
        items-center
        h-auto
        pt-20
        lg:px-20
        pb-20
        lg:gap-20
        gap-10
        '>
          {/* team member detail section */}
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
              {/* Team member image */}
              <div className='lg:w-[43%] bg-black'>
                <img src={teamMember?.image_url} className='md:h-[700px] h-[350px] w-full ' />
              </div>

              {/* Team member profile details */}
              <div className='
                     lg:w-[60%] 
                     flex
                     flex-col
                     gap-8
                     '>
                {/* Section 1 */}
                <div className='
                        flex
                        flex-col'>
                  <div className='flex'>
                    <TypographyH2 title={teamMember?.name} className='font-bold text-4xl' />
                  </div>
                  <div className='flex'>
                    <TypographyP title={teamMember?.title} className='text-primary font-semibold' />
                  </div>
                </div>

                {/* Section 2 */}
                <div className='
                        flex
                        flex-col'>
                  <div className='flex'>
                    <TypographyP title={'Newton virtual desktop offers a fast and reliable workspace from anywhere. A truly powerful tool where your data and applications are secured in a private location in the prestigious Telehouse data centre in London.'} 
                    className='text-muted-foreground' />
                  </div>
                </div>

                {/* Section 3 */}
                <div className='
                          flex
                          flex-col
                          gap-5'>
                  <div className='flex gap-5 items-center'>
                    <div className='flex bg-card p-2 rounded-lg'>
                      <FiPhone size={35} className='text-primary' />
                    </div>
                    <div className='flex flex-col'>
                      <div className='flex'>
                        <TypographyH4
                          title={teamMember?.contact_no}
                          className='font-semibold text-lg' />
                      </div>
                    </div>
                  </div>

                  <div className='flex gap-5 items-center'>
                    <div className='flex bg-card p-2 rounded-lg'>
                      <IoLocationOutline size={35} className='text-primary ' />
                    </div>
                    <div className='flex flex-col'>
                      <div className='flex'>
                        <TypographyH4
                          title={teamMember?.address}
                          className='font-semibold text-lg' />
                      </div>
                    </div>
                  </div>

                  <div className='flex gap-5 items-center'>
                    <div className='flex bg-card p-2 rounded-lg'>
                      <MdOutlineMarkEmailRead size={35} className='text-primary' />
                    </div>
                    <div className='flex flex-col'>
                      <div className='flex lg:w-[60%]'>
                        <TypographyH4
                          title={teamMember?.email}
                          className='font-semibold text-lg' />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className='
                         w-[150px]
                        flex
                        items-center
                        justify-center
                        bg-white'>
                  {teamMember?.social_links?.map(({id, social_link, social_type}, index) => (
                    <div 
                      key={id}
                      className={cn("flex border group-hover:border-primary p-3 px-3",
                      teamMember.social_links!==null && index<teamMember.social_links?.length-1 &&"border-r-0"
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
            </div>

            {/* skills section */}
            <div className='
                w-full
                flex
                flex-col
                lg:flex-row
                gap-8
                lg:items-center
                '>
              {/* Team member Activity section */}
              <div className=' lg:w-[50%]'>

                {/* Section 1 */}
                <div className='
                    flex
                    flex-col
                    gap-5'>

                  <div className='flex -mb-3'>
                    <TypographyH2 title={'Activities'} className='font-bold text-4xl' />
                  </div>

                  <div className='flex'>
                    <TypographyP
                      title={'A hosted desktop solution allows for the delivery of a consistent and scalable IT experience for all users in an organisation.'}
                      className='text-muted-foreground' />
                  </div>

                  {/* Addional skills */}
                  <div className='
                           flex
                           flex-col
                           gap-3'>
                    {addtionalSkills?.map((skill, index) => (
                      <div 
                      key={index+1}
                      className='flex gap-4 items-center'>
                        <div className='flex'>
                          <FaCheckCircle size={20} />
                        </div>
                        <div className='flex'>
                          <TypographyP
                            title={skill}
                            className='font-semibold' />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Team member profile details */}
              <div className='
                     lg:w-[50%] 
                     flex
                     flex-col
                     gap-8
                     '>
                {/* Progress Section */}
                <div className='
                    flex
                    flex-col
                    gap-5'>

                  {progressData?.map((item) => (
                    <div className='
                      lg:w-[80%]
                      w-full
                      flex
                      flex-col
                      gap-3
                      text-secondary-foreground'
                      key={item.id}>
                      <div className='
                                flex
                                items-center
                                justify-between
                                '>

                        <div>
                          <TypographyP
                            title={item.title}
                            className='font-bold' />
                        </div>
                        <div>
                          <TypographyP
                            title={`${item.value}%`}
                            className='font-bold' />
                        </div>
                      </div>
                      <Progress
                        value={item.value}
                        className='h-2 rounded-full'
                        filledStyle={item.fillColor} />
                    </div>
                  ))}

                </div>
              </div>
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
              {/* Team member Additional infromation section */}
              <div className='
                        flex
                        flex-col
                        gap-5'>

                <div className='flex -mb-3'>
                  <TypographyH2 title={'Information'} className='font-bold text-4xl' />
                </div>

                <div className='flex'>
                  <TypographyP
                    title={teamMember?.infromation}
                    className='text-muted-foreground' />
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

export default LandingOurTeamDetails

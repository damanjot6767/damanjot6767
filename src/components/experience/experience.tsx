import React from 'react'
import ReactPlayer from 'react-player'
import { TypographyH3, TypographyH4, TypographyP } from '../ui/Typography'
import { HeroBackgroundAnimation } from '../hero/heroBackgroundAnimation,'

const Experience = () => {

  const projects = [{
    id: '1',
    title: 'YOLO Backpackers',
    desc: 'YOLO is a service provider platform where you see differnt location of hill station and advance booking in hotels',
    stack: 'REACT | NEXT  | NODE | TYPESCRIPT | MYSQL |SWAGGER',
    video_url: "https://firebasestorage.googleapis.com/v0/b/uploadvideo-b412b.appspot.com/o/yolo_video.mp4?alt=media&token=5413bb8a-9377-4a31-aea3-157d344b8427"
  }]

  return (
    <div 
    id="experience"
    className='
        w-full
        realtive
        bg-background1'>
      {/* Experience Main section */}
      <div className='
        xl:w-[80%] 
        mx-auto
        relative
        grid
        grid-cols-1
        h-auto
        lg:px-20 
        px-5
        lg:py-20
        py-10
        gap-20'>
        {/* Content Section */}
        <div className='
          flex
          flex-col
          gap-20'>
          {/* Header section */}
          <div className="
            flex
            flex-col
            items-center
            gap-5
            w-full
            ">
            <div className='
              flex
              items-center
              gap-5
              text-primary-foreground'>
              <span className='h-[9px] w-[9px] bg-primary rounded-full' />
              <TypographyH3 title='Projects' />
              <span className='h-[9px] w-[9px] bg-primary rounded-full' />
            </div>

            <div
              className="
              text-[30px]
              font-bold 
              lg:text-[45px]
              md:leading-[55px]
              leading-[45px]">
              We provide the necessary
              <span className="text-primary-foreground">{" Services "}</span>
              to you
            </div>

          </div>

          {/* Projects section */}
          <div className='
          flex
          flex-col
          gap-10
          z-20
          '>
            {projects?.map((ele) => (
              <div className='
              flex
              flex-col
              gap-10
              bg-white
              p-5
              rounded-lg
              shadow-lg
              transition-all
              duration-1000
              hover:scale-[1.03]'>
                <div className='
                flex
                flex-col
                gap-3'>
                  <div className='
                  flex
                  gap-2'>
                    <div className='
                    flex'>
                      <TypographyH4 title={ele.title} />
                    </div>
                  </div>

                  <div className='
                  flex
                  gap-2'>
                    <div className='
                    flex'>
                      <TypographyP title={ele.desc} />
                    </div>
                  </div>

                  <div className='
                  flex
                  gap-2'>
                    <div className='
                    flex'>
                      <TypographyP title={ele.stack} />
                    </div>
                  </div>
                </div>

                <div className='w-full h-full'>
                  <ReactPlayer
                    url={ele.video_url}
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={true} // change to true if you want the video to start playing automatically
                    loop={false} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image animation */}
        <HeroBackgroundAnimation />
      </div>
    </div>
  )
}

export default Experience
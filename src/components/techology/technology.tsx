import React, { useEffect } from 'react';
import { motion } from "../../utils/animation"
import { TypographyH2, TypographyP } from '../ui/Typography';
import { RoutesName } from '../../utils/constant';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../stateStore';
import { getProjectById } from '../../services';
import ReactImage from "../../assets/images/react.png"
import JavaScriptImage from "../../assets/images/javascript.png";
import NodeImage from "../../assets/images/nodejs.png";
import AwsImage from "../../assets/images/aws.png";
import TypeScriptImage from "../../assets/images/typescript.png";
import DBImage from "../../assets/images/databse.png";
import NextImage from "../../assets/images/nextjs.png";

const technologies = [
  {
    id: '1',
    title: "Next JS",
    description: "",
    icon: NextImage
  },
  {
    id: '2',
    title: "React JS",
    description: "",
    icon: ReactImage
  },
  {
    id: '3',
    title: "JavaScript",
    description: "",
    icon: JavaScriptImage
  },
  {
    id: '4',
    title: "Node JS",
    description: "",
    icon: NodeImage
  },
  {
    id: '5',
    title: "AWS",
    description: "",
    icon: AwsImage
  },
  {
    id: '6',
    title: "TypeScript",
    description: "",
    icon: TypeScriptImage
  },
  {
    id: '7',
    title: "MongoDB",
    description: "",
    icon: DBImage
  },
]
const Technology = () => {

  return (
    <div 
    id='technology'
    className='w-full h-full'>

      {/* contact main section */}
      <div className='
      pt-20
      flex
      flex-col
      bg-secondary'>

        {/* Technology section */}
        <div className='
         xl:w-[80%] 
         mx-auto
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
            <span className='h-[9px] w-[9px] bg-primary rounded-full' />
            <TypographyH2 title={'Technology'} className='font-bold lg:text-4xl text-2xl' />
            <span className='h-[9px] w-[9px] bg-primary rounded-full' />
          </div>

          <div className='
          grid
          lg:grid-cols-5
          md:grid-cols-3
          grid-cols-2
          lg:gap-10
          gap-5
          items-center'>
            {technologies?.map((technology, index) => (
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
                initial={{ x: 70, opacity: 0 }}
                whileInView={{ x: 0, opacity: 100 }}
                transition={{ duration: 0.7, delay: 0.3 * index, ease: 'easeIn' }}
                viewport={{ once: true }}>
                <img src={technology.icon} className='w-full h-full' />
                <div className=''>
                  <TypographyP title={technology.title} className='font-semibold' />
                </div>

                <motion.div
                  className='absolute border-[1px] border-primary top-0 left-0 right-0'
                  whileInView={{ width: ['0%', '50%', '100%'] }}
                  transition={{ duration: 1, ease: 'linear' }} />
                <motion.div
                  className='absolute border-[1px] border-primary top-0 bottom-0 right-0'
                  whileInView={{ height: ['0%', '50%', '100%'] }}
                  transition={{ duration: 1, ease: 'linear' }} />
                <motion.div
                  className='absolute border-[1px] border-primary left-[100%] bottom-0 right-0'
                  whileInView={{ left: ['100%', '50%', '0%'] }}
                  transition={{ duration: 1, ease: 'linear' }} />
                <motion.div
                  className='absolute border-[1px] border-primary top-[100%] bottom-0 left-0'
                  whileInView={{ top: ['100%', '50%', '0%'] }}
                  transition={{ duration: 1, ease: 'linear' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
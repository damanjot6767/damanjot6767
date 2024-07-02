

import contactBackgroudImage from "../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH4, TypographyH5, TypographyP } from '../../components/ui/Typography';
import { FiPhone, IoLocation, IoLocationOutline, MdKeyboardDoubleArrowRight, MdOutlineMarkEmailRead } from "../../utils/icons"
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../utils/constant';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import { Loader2 } from 'lucide-react';
import worldmap from "../../assets/images/worldmap.jpg"
import Map from "../../components/map/map";
import { yupResolver, yup, useForm, SubmitHandler, FieldValues } from "../../utils/react-hook-form"
import { SendMail } from "../../services/sendMail";
import { useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../../stateStore";
import { getDevroninsDetails } from "../../services";
import { LoadingErrorWrapper } from "../../components/common/loading_error_wrapper";

const ServiceType = [
  'Success Fulfill',
  'StartUp Business',
  "Business Growth"
]

const sendMessageFormValidation = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  name: yup.string().required('Name is required'),
  phone: yup.string().nullable(),
  message: yup.string().required('Message required'),
  service_type: yup.string().oneOf(ServiceType).required('Select service is required')
})

interface IFormInput {
  email: string;
  name: string;
  phone?: string | null;
  message: string;
  service_type: string;
}

const sendMessageFormDefaultValues = {
  email: '',
  name: '',
  phone: '',
  message: '',
  service_type: ''
}
const ContactComponent = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const dispatch = useAppDispatch()
  const { devroninsDetails, error, devroninsDetailsLoading } = useTypedSelector((state) => state.Devronins);

  useEffect(() => {
    dispatch(getDevroninsDetails())
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: {
      errors,
    }
  } = useForm<IFormInput>({
    defaultValues: sendMessageFormDefaultValues,
    resolver: yupResolver(sendMessageFormValidation),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)
    await SendMail({
      from_name: data.name,
      message: data.message,
      service_type: data.service_type,
      contact_no: data?.phone || "N/A",
      email: data.email
    })
    setLoading(false)
    reset()
  }

  return (
    <div className='w-full h-full md:pb-20 pb-10'>

      {/* Contact form section */}
      <div className='
        relative
        xl:w-[80%] 
        flex
        flex-col
        items-center
        h-auto
        lg:px-20 
        px-5
        pt-20
        mx-auto'>
        <div className='
            w-full
            flex
            flex-col
            gap-10'>

          {/* Contact Header section */}
          <div className='
                flex
                flex-col
                lg:gap-10
                gap-5'>
            <div
              className="
                    text-3xl
                    font-bold 
                    lg:text-4xl">
              Grow Your Business With
              <span className="text-primary-foreground">{" My Expertise "}</span>
            </div>

            <div className='
                    flex
                    items-center
                    text-secondary-foreground'>
              <TypographyP
                title='We understand the importance of approaching each work integrally and believe in the power of simple.' />
            </div>
          </div>

          <div className='
                flex
                lg:flex-row
                lg:items-center
                flex-col
                gap-5'>
            {/* Contact Form section */}
            <div className='
              w-full
                    lg:py-20
                    lg:px-20
                    px-5
                    py-10
                    bg-accent'>
              <form className='
                      grid
                      grid-cols-1
                      lg:grid-cols-2
                      gap-5'
                onSubmit={handleSubmit(onSubmit)} >

                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="name" className='text-sm'>Name (required)</label>
                  <Input disabled={loading} type="text" id="name" placeholder="Your name*" {...register('name')} error={errors?.name?.message} />
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="email" className='text-sm'>Email adress (required)</label>
                  <Input disabled={loading} type="email" id="email" placeholder="Mail*" {...register('email')} error={errors?.email?.message} />
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="phone" className='text-sm'>Phone (optional)</label>
                  <Input disabled={loading} type="text" id="phone" placeholder="Your phone" {...register('phone')} error={errors?.phone?.message} />
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="service_type" className='text-sm'>Services (required)</label>
                  <Select onValueChange={(value) => setValue('service_type', value)} value={watch('service_type')}>
                    <SelectTrigger disabled={loading} className="w-full" error={errors?.service_type?.message}>
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent >
                      {ServiceType?.map((item, index) => (
                        <SelectItem key={index + 1} value={item}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                </div>

                <div className="grid w-full items-center gap-1.5 lg:col-span-2">
                  <label htmlFor="message" className='text-sm'>Your message</label>
                  <Textarea disabled={loading} id="message" placeholder="Type message*" className='h-[140px]' {...register('message')} error={errors?.message?.message} />
                </div>

                <Button type='submit' className='w-40 h-[auto] rounded-none gradient8 text-sm text-white py-3'>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Contact Me
                </Button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactComponent
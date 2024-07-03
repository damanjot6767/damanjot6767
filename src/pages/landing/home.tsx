import React, { useEffect } from 'react';
import { Hero } from '../../components/hero/hero';
import Experience from '../../components/experience/experience';
import About from '../../components/about/about';
import Reviews from '../../components/reviews/reviews';
import { ScrollToTop } from '../../components/scrollToTop/scrollToTop';
import Technology from '../../components/techology/technology';
import ContactComponent from '../../components/contact/contact';
import { Navbar } from '../../components/navbars/navbar';



export const LandingHomePage = () => {
 
  return (
    <div className='w-full h-full'>
      <Navbar/>
      <ScrollToTop/>
      <Hero/>
      <About/>
      <Experience/>
      <Technology/>
      <Reviews/>
      <ContactComponent/>
    </div>
  )
}
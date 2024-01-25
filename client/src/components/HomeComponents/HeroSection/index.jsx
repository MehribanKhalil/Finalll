import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss'

import { Navigation } from 'swiper/modules';


const HeroSection = () => {
  return (
    <section className='hero-section '> 
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className='slide section flex justify-center items-center font-semibold text-white'>
                    <h1>Get Your <span className='  bg-main-color'>Education</span> Today !</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='slide section flex justify-center items-center font-semibold text-white'>
                    <h1>Get Your <span className='  bg-main-color'>Education</span> Today !</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='slide section flex justify-center items-center font-semibold text-white'>
                    <h1>Get Your <span className='  bg-main-color'>Education</span> Today !</h1>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default HeroSection

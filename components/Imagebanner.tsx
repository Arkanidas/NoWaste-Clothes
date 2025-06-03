"use client"; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Imagebanner.module.css';



export default function ImageBanner() {
  return (
    <div className={styles.bannerContainer}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation 
        slidesPerView={1}
        
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        className={styles.swiper}
      >
       <SwiperSlide key="africa-1">
          <img src="/image.png" alt="Slide 1" className={styles.bannerImage} />
        </SwiperSlide >

        <SwiperSlide key="africa-2">
          <img src="/africa.jpg" alt="Slide 2" className={styles.bannerImage} />
        </SwiperSlide>

        <SwiperSlide key="africa-3">
          <img src="/don.png" alt="Slide 3" className={styles.bannerImage} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

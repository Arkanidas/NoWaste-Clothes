"use client"; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Imagebanner.module.css';

const images = [
  "/africa.jpg",
  "/thanks.jpg",
  "/don.png",
];


export default function ImageBanner() {
  return (
    <div className={styles.bannerContainer}>
      <Swiper
        modules={[Navigation]}
        navigation 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={false}
        className={styles.swiper}
      >
       <SwiperSlide>
          <img src="/africa.jpg" alt="Slide 1" className={styles.bannerImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image.png" alt="Slide 2" className={styles.bannerImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/don.png" alt="Slide 3" className={styles.bannerImage} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

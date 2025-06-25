"use client"; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Imagebanner.module.css';



export default function ImageBanner() {

  const router = useRouter();

  return (
    <div className={styles.BannerContainer}>
       <h1 className={styles.BannerHeader}>NOWASTE</h1>
      <h2 className={styles.BannerDescription}>För en god gärning åt framtida barn</h2>
      <button className={styles.BannerButton}  onClick={() => router.push('/Donate')}>Donera Nu</button>
      <div/>
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

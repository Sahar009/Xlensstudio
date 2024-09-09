import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SliderSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className='swiperContainer'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {/* Skeleton placeholders */}
          {[...Array(3)].map((_, index) => (
            <SwiperSlide key={index}>
              {/* Ensure the Skeleton is wrapped properly */}
              <div className='skeleton_div' style={{ width: "100%", height: "100%" }}>
                <Skeleton className='mySwiperImg' style={{ width: "100%", height: "100%" }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SkeletonTheme>
  );
};

export default SliderSkeleton;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './serviceSlider.scss';
import { Autoplay, Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ServiceSlider = ({ images }) => {
  return (
    <div className='swiperContainer'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 0px, show 1 slide
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 768px, show 3 slides
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            {/* Make sure to access the `url` property */}
            <LazyLoadImage className='mySwiperImg' src={image.url} alt={`Slide ${index + 1}`}/>
            {/* <img  loading="lazy"   /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;

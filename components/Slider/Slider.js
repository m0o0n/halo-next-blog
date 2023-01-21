import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useRef } from 'react';
import Image from 'next/image';

const SliderCard = ({width, height, alt, src}) => (
        <>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </>
)

export default () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className='home_page_slider'>

      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        spaceBetween={250}
        slidesPerView="auto"
        centeredSlides={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 200,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 100,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 250,
            centeredSlides: true,
          },
        }}
      >
        <SwiperSlide>
          <SliderCard 
            src='/assets/cardMain.png'
            alt="team player"
            width={330}
            height={270}
          />
        </SwiperSlide>
        

        <SwiperSlide>
        <SliderCard
          src='/assets/card1.png'
          alt="card1"
          width={155}
          height={155}
        />
        </SwiperSlide>
        
        <SwiperSlide>
          <SliderCard
            src='/assets/card2.png'
            alt="card2"
            width={210}
            height={210}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard
            src='/assets/card3.png'
            alt="card3"
            width={210}
            height={185}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard
            src='/assets/card4.png'
            alt="card4"
            width={180}
            height={155}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard
            src='/assets/card4.png'
            alt="card4"
            width={180}
            height={155}
          />
        </SwiperSlide>

        <div className="home_page_slider__pagination_container">
          <div className='swiper-prev' ref={prevRef}><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.212403 7.46465L6.74633 0.721429C7.03304 0.42619 7.49754 0.42619 7.78497 0.721429C8.07168 1.01667 8.07168 1.49621 7.78497 1.79145L1.76931 7.99963L7.78425 14.2078C8.07095 14.503 8.07095 14.9826 7.78425 15.2786C7.49754 15.5738 7.03231 15.5738 6.74561 15.2786L0.211679 8.53535C-0.0706816 8.24317 -0.0706816 7.75609 0.212403 7.46465Z" fill="#1E1A20" />
          </svg>
          </div>

          <div className="swiper-pagination">
          </div>

          <div className='swiper-next' ref={nextRef}><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.7876 7.46465L1.25367 0.721429C0.966964 0.42619 0.502457 0.42619 0.215028 0.721429C-0.0716761 1.01667 -0.0716761 1.49621 0.215028 1.79145L6.23069 7.99963L0.215752 14.2078C-0.070952 14.503 -0.070952 14.9826 0.215752 15.2786C0.502457 15.5738 0.967688 15.5738 1.25439 15.2786L7.78832 8.53535C8.07068 8.24317 8.07068 7.75609 7.7876 7.46465Z" fill="#1E1A20" />
          </svg>
          </div>
        </div>


      </Swiper>

    </div>

  );
};
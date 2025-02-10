import { allProductsIntro } from "../static/Data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./MOWIntroSwiper.scss";

const MOWIntroSwiper = () => {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="custom-swiper"
      >
        {allProductsIntro.map(
          ({ title, description, linkTitle, imgSrc }, indx) => {
            return (
              <SwiperSlide key={indx}>
                <div className="slide-container">
                  <h1>
                    <i>{title}</i>
                  </h1>
                  <img src={imgSrc} alt={`${title} Intro`}/>
                  <div className="slide-info">
                    <p>{description}</p>
                    <a href="./ok.html">{linkTitle}</a>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};
export default MOWIntroSwiper;

import { useNavigate } from "react-router-dom";
import { allProductsIntro } from "../static/Data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./MOWIntroSwiper.scss";

const MOWIntroSwiper = () => {
  
  const navigate = useNavigate();
  const takeToCategoryHandler = (routeTo) => {
    // navigating back to store and maintaining the scroll position(overiding the previous scroll retentation) at the top,
    // since React Router by default retains the scroll position(old scroll position) when navigating between pages.
    navigate(`/${routeTo}`);
    setTimeout(() => window.scrollTo(0, 0), 10);
  };
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
          ({ title, description, linkTitle, imgSrc, navlink }, indx) => {
            return (
              <SwiperSlide key={indx}>
                <div className="slide-container">
                  <h1>
                    <i>{title}</i>
                  </h1>
                  <img src={imgSrc} alt={`${title} Intro`} />
                  <div className="slide-info">
                    <p>{description}</p>
                    <button onClick={() => takeToCategoryHandler(navlink)}>
                      {linkTitle}
                    </button>
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

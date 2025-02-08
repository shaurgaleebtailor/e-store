import { useState, useEffect } from "react";
import { useMOWChecker } from "../utilities/useMOWChecker";
import { heroCarouselData } from "../static/Data";
import {clsx as cn} from 'clsx'
import "./HeroCarousel.scss";
const HeroCarousel = () => {
  const [currImgIndex, setCurrImgIndex] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCurrImgIndex((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currImgIndex]);
  const isMobile = useMOWChecker();

  const { image, title } = heroCarouselData[currImgIndex];
  return (
    <article className={cn({"hero-carousel":isMobile,"hero-carousel-desktop":!isMobile})}>
      <h1 id="carousel-heading">Hot Buyings</h1>
      <div id="img-div">
      <img src={image} alt={title}  />
      </div>
      <p>{title}</p>
      <button id="btn">Buy</button>
    </article>
  );
};
export default HeroCarousel;

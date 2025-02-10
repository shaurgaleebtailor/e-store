import { useState, useRef } from "react";
import { allProductsIntro } from "../static/Data";

const MOWIntro = () => {
  const [curIndx, setCurIndx] = useState(0);
  const introProductsLength = allProductsIntro.length;
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  const nextImg = () => {
    setCurIndx((prev) => prev + 1);
  };
  const prevImg = () => {
    setCurIndx((prev) => prev - 1);
  };
  const touchStartHandler = (e) => {
    touchStartRef.current = e.changedTouches[0].clientX;
  };
  const touchEndHandler = (e) => {
    touchEndRef.current = e.changedTouches[0].clientX;

    // swiping logic
    let diffX = touchEndRef.current - touchStartRef.current;
    console.log(curIndx);
    if (curIndx >= 0 && curIndx < introProductsLength - 1) {
      if (diffX < -50) {
        nextImg();
      }
    }
    if (curIndx < introProductsLength && curIndx > 0) {
      if (diffX > 50) {
        prevImg();
      }
    }
  };

  let { title, description, linkTitle, imgSrc } = allProductsIntro[curIndx];
  let rightbtndisabled = curIndx === allProductsIntro.length - 1;
  let leftbtndisabled = curIndx === 0;
  return (
    <div
      style={{ position: "relative" }}
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
    >
      <h1>{title}</h1>
      <button
        style={{ position: "absolute", top: "125px", left: "20px" }}
        onClick={prevImg}
        disabled={leftbtndisabled}
      >
        &lt;
      </button>
      <img
        src={imgSrc}
        height={"200px"}
        width={"375px"}
        alt={`${title} Intro`}
      />
      <button
        style={{ position: "absolute", top: "125px", right: "20px" }}
        onClick={nextImg}
        disabled={rightbtndisabled}
      >
        &gt;
      </button>
      <div style={{ position: "absolute", top: "200px" }}>
        <p>{description}</p>
        <a href="./ok.html">{linkTitle}</a>
      </div>
    </div>
  );
};
export default MOWIntro;

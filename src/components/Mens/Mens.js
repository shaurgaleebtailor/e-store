import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { clsx as cn } from "clsx";
import { useMOWChecker } from "../utilities/useMOWChecker.js";
import menscategoryintro from "../../assets/mens/mens-category-intro.webp";
import "./Mens.scss";
const Mens = () => {
  const isMobile = useMOWChecker();
  const navigator = useNavigate();
  const backToStore = () => {
    // navigating back to store and maintaining the scroll position(overiding the previous scroll retentation) at the top,
    // since React Router by default retains the scroll position(old scroll position) when navigating between pages.
    window.scrollTo(0, 0);
    navigator("/");
  };

  return (
    <Fragment>
      <div className="mens-category">
        <h1>
          <i>Men's Category</i>
        </h1>
        <div className={cn("mens-category-intro", { mow: isMobile })}>
          <img
            src={menscategoryintro}
            alt="mens category"
            className="mens-category-intro-img"
          />
          <div className="mens-category-intro-info">
            <h2>Explore Men's Fashion</h2>
            <p>
              Upgrade your style with our latest collection of men's clothing.
              From casual wear to formal attire, we bring you premium-quality
              outfits designed for comfort and confidence. Whether you're
              looking for everyday essentials or statement pieces, find the
              perfect fit for every occasion.
            </p>
            <p>
              Discover top trends, durable fabrics, and stylish designs tailored
              to enhance your wardrobe. Shop now and redefine your fashion game
              with outfits that make a lasting impression!
            </p>
          </div>
        </div>
        <div id="back-to-store">
          <button onClick={backToStore}>&larr; Store</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Mens;

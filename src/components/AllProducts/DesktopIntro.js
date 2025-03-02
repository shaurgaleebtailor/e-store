import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./DesktopIntro.scss";

const DesktopIntro = ({ productData }) => {
  const [isVisible, SetIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    let intrsecObsr = new IntersectionObserver(
      (entry) => {
        if (entry[0].intersectionRatio >= 0.5) {
          SetIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    let imgRefCurrent = imgRef.current;
    if (imgRefCurrent) {
      intrsecObsr.observe(imgRefCurrent);
    }
    return () => {
      if (imgRefCurrent) {
        intrsecObsr.unobserve(imgRefCurrent);
      }
    };
  }, []);
  const navigate = useNavigate();
  const takeToCategoryHandler = (routeTo) => {
    // navigating back to store and maintaining the scroll position(overiding the previous scroll retentation) at the top,
    // since React Router by default retains the scroll position(old scroll position) when navigating between pages.
    navigate(`/${routeTo}`);
    setTimeout(() => window.scrollTo(0, 0), 10);
  };

  const { title, id, imgSrc, description, linkTitle, navlink } = productData;

  let renderSection =
    !(id % 2) == 0 ? (
      <div className="products-intro-container">
        <article className="left-part">
          <img src={imgSrc} ref={imgRef} alt={title + "logo"} />
        </article>
        <section className="right-part">
          {isVisible && (
            <div className="intro-animation">
              <h2>
                <i>{title} </i>
              </h2>
              <p>{description}</p>
              <button onClick={() => takeToCategoryHandler(navlink)}>
                {linkTitle}
              </button>
            </div>
          )}
        </section>
      </div>
    ) : (
      <div className="products-intro-container ">
        <section className="right-part">
          {isVisible && (
            <div className="intro-animation">
              <h2>
                <i>{title} </i>
              </h2>
              <p>{description}</p>
              <button onClick={() => takeToCategoryHandler(navlink)}>
                {linkTitle}
              </button>
            </div>
          )}
        </section>
        <article className="left-part">
          <img src={imgSrc} ref={imgRef} alt={title + "logo"} />
        </article>
      </div>
    );
  return <>{renderSection}</>;
};
export default DesktopIntro;

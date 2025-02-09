import { useState, useEffect, useRef } from "react";
const DesktopIntro = ({ productData }) => {
  const [isVisible, SetIsVisible] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    let intrsecObsr = new IntersectionObserver(
      (entry) => {
        if (entry[0].intersectionRatio >= 0.75) {
          {
            SetIsVisible(true);
          }
        }
      },
      { threshold: 0.75 }
    );
    if (imgRef.current) {
      intrsecObsr.observe(imgRef.current);
    }
    return () => {
      if (imgRef.current) {
        intrsecObsr.unobserve(imgRef.current);
      }
    };
  }, []);
  const { title, id, imgSrc, description, linkTitle } = productData;
  let renderSection =
    !(id % 2) == 0 ? (
      <div className="products-intro-container">
        <article className="left-part">
          <img src={imgSrc} ref={imgRef} />
        </article>
        <section className="right-part">
          {isVisible && (
            <>
              <h2>
                <i>{title} </i>
              </h2>
              <p>{description}</p>
              <a href="./ok.html">{linkTitle}</a>
            </>
          )}
        </section>
      </div>
    ) : (
      <div className="products-intro-container ">
        <section className="right-part reverse">
          {isVisible && (
            <>
              <h2>
                <i>{title} </i>
              </h2>
              <p>{description}</p>
              <a href="./some-dummy-html-for-time-being.html">{linkTitle}</a>
            </>
          )}
        </section>
        <article className="left-part reverse">
          <img src={imgSrc} ref={imgRef} />
        </article>
      </div>
    );
  return <>{renderSection}</>;
};
export default DesktopIntro;

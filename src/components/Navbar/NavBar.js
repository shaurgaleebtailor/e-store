import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useMOWChecker } from "../utilities/useMOWChecker";
import { avoidBackgroundScrolling } from "../utilities/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { availableCategories } from "../static/Data";
import "./NavBar.scss";
import Logo from "../../assets/logo.png";

const NavBar = () => {
  const isMobile = useMOWChecker();
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const scrlY_fromHTML = useRef();
  useEffect(() => {
    if (!isMobile && displayDrawer) {
      setDisplayDrawer(false);
    }
  }, [isMobile,displayDrawer]);
  const MowNav = () => {
    const openDrawerHandler = () => {
      setDisplayDrawer(true);
      scrlY_fromHTML.current = document.documentElement.scrollTop;
    };
    return (
      <ul className="nav-items-mow">
        <li id="mow-nav-menubars" onClick={openDrawerHandler}>
          <FontAwesomeIcon icon={faBars} />
        </li>
        <li id="mow-nav-title">E - Store</li>
      </ul>
    );
  };
  const MowNavDrawer = () => {
    const closeDrawerHandler = () => {
      setDisplayDrawer(false);
    };
    // avoiding background scrolling when displayDrawer is true(dialog is in open state)
    avoidBackgroundScrolling(isMobile,displayDrawer);
    return (
      <div>
        {displayDrawer && (
          <div className="drawer" style = {{ top : `${scrlY_fromHTML.current}px`}}>
            <button onClick={closeDrawerHandler} id="drawer-cncl-btn">
              X
            </button>
            <div className="drawer-items">
              {availableCategories.map((itm, index) => (
                <span key={index} onClick={closeDrawerHandler}>{itm}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  const DesktopNav = () => {
    return (
      <ul className="nav-items">
        <li>
          <img src={Logo} alt="store logo" />
        </li>
        {availableCategories.map((itm, index) => (
          <li key={index} className="nav-links">{itm}</li>
        ))}
      </ul>
    );
  };
  const navmowdrawerPortal = createPortal(
    <MowNavDrawer />,
    document.getElementById("drawer-mow")
  );
  return (
    <>
      <nav className="navbar">
        {isMobile ? <MowNav /> : <DesktopNav />}
        <section className="cart">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" id="cart-logo" />
          <span id="cart-count">123</span>
        </section>
      </nav>
      {isMobile && navmowdrawerPortal}
    </>
  );
};
export default NavBar;

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useMOWChecker } from "../utilities/useMOWChecker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { availableCategories } from "../static/Data";
import "./NavBar.scss";
import Logo from "../../assets/logo.png";

const NavBar = () => {
  const isMobile = useMOWChecker();
  const [displayDrawer, setDisplayDrawer] = useState(false);
  useEffect(() => {
    if (!isMobile && displayDrawer) {
      setDisplayDrawer(false);
    }
  }, [isMobile,displayDrawer]);
  const MowNav = () => {
    const openDrawerHandler = () => {
      setDisplayDrawer(true);
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
    return (
      <div>
        {displayDrawer && (
          <div className="drawer">
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
          <li key={index}>{itm}</li>
        ))}
      </ul>
    );
  };
  const navmowdrawerPortal = createPortal(
    <MowNavDrawer />,
    document.getElementById("drawer-mow")
  );
  return (
    <div>
      <nav className="navbar">
        {isMobile ? <MowNav /> : <DesktopNav />}
        <section className="cart">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" id="cart-logo" />
          <span id="cart-count">123</span>
        </section>
      </nav>
      {isMobile && navmowdrawerPortal}
    </div>
  );
};
export default NavBar;

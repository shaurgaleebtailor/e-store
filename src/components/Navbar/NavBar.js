import { useMOWChecker } from "../utilities/useMOWChecker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";
import Logo from "../../assets/logo.png";

const NavBar = () => {
  const isMobile = useMOWChecker();
  const MowNav = () => {
    return (
      <ul className="nav-items-mow">
        <li id="mow-nav-menubars">
          <FontAwesomeIcon icon={faBars} />
        </li>
        <li id="mow-nav-title">E - Store</li>
      </ul>
    );
  };
  const DesktopNav = () => {
    return (
      <ul className="nav-items">
        <li>
          <img src={Logo} alt="store logo" />
        </li>
        <li>Electronics</li>
        <li>Jewellery</li>
        <li>Mens Clothing</li>
        <li>Womens Clothing</li>
      </ul>
    );
  };
  return (
    <nav className="navbar">
      {isMobile ? <MowNav /> : <DesktopNav />}
      <section className="cart">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" id="cart-logo" />
        <span id="cart-count">123</span>
      </section>
    </nav>
  );
};
export default NavBar;

import DesktopIntro from "./DesktopIntro.js";
import MOWIntroSwiper from "./MOWIntroSwiper.js";
import {useMOWChecker} from "../utilities/useMOWChecker.js";
import { allProductsIntro } from "../static/Data";
import "./DesktopIntro.scss";

const AllProductsIntro = () => {
  // Desktop mode
  let productsDesktop = allProductsIntro.map(itm => <DesktopIntro key={itm.id} productData={itm} />);
  // MOW mode
  let productsMOW = <div><MOWIntroSwiper/></div>
  const isMobile  = useMOWChecker();
  let listToRender = isMobile ? productsMOW : productsDesktop;
  return <>{listToRender}</>;
};
export default AllProductsIntro;

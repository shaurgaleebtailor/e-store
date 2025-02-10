import DesktopIntro from "./DesktopIntro";
import { allProductsIntro } from "../static/Data";
import {useMOWChecker} from "../utilities/useMOWChecker.js"
import "./DesktopIntro.scss";
const AllProductsIntro = () => {
  //   desktop mode
  let productsDesktop = allProductsIntro.map((itm) => (
    <DesktopIntro key={itm.id} productData={itm} />
  ));
  const isMobile  = useMOWChecker();
  let listToRender = isMobile ? (<div>MOW</div>):(
    productsDesktop
  )

  return <>{listToRender}</>;
};
export default AllProductsIntro;

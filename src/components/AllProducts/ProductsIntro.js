import DesktopIntro from "./DesktopIntro";
import { allProductsIntro } from "../static/Data";
import "./DesktopIntro.scss";
const AllProductsIntro = () => {
  //   desktop mode
  let productsListToRender = allProductsIntro.map((itm) => (
    <DesktopIntro key={itm.id} productData={itm} />
  ));
  return <>{productsListToRender}</>;
};
export default AllProductsIntro;

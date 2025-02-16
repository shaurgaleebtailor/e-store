import { Fragment, lazy } from "react";
const HeroCarousel = lazy(() => import("../herocarousel/HeroCarousel.js"));
const AllProductsIntro = lazy(() => import("../AllProducts/ProductsIntro.js"));
const StoreIntro = lazy(() => import("../StoreIntro/StoreIntro.js"));
const HomePage = () => {
  return (
    <Fragment>
      <HeroCarousel />
      <main>
        <AllProductsIntro />
      </main>
      <StoreIntro />
    </Fragment>
  );
};
export default HomePage;

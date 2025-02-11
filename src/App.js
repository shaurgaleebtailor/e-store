import { Fragment } from "react";
import NavBar from "./components/Navbar/NavBar.js";
import HeroCarousel from "./components/herocarousel/HeroCarousel.js";
import AllProductsIntro from "./components/AllProducts/ProductsIntro.js";
import StoreIntro from "./components/StoreIntro/StoreIntro.js";
import Footer from "./components/footer/Footer.js";
const App = () => {
  return (
    <Fragment>
      <NavBar />
      <HeroCarousel />
      <main>
        <AllProductsIntro />
      </main>
      <StoreIntro />
      <Footer />
    </Fragment>
  );
};
export default App;

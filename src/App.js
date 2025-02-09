import { Fragment } from "react";
import NavBar from "./components/Navbar/NavBar.js";
import HeroCarousel from "./components/herocarousel/HeroCarousel.js";
import AllProductsIntro from "./components/AllProducts/ProductsIntro.js";
const App = () => {
  return (
    <Fragment>
      <NavBar />
      <HeroCarousel/>
      <main>
      <AllProductsIntro/>
        {/* <h1>
          Hero Section
        </h1> */}
      </main>
      <footer>
        Footer
      </footer>
    </Fragment>
  );
};
export default App;

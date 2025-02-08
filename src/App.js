import { Fragment } from "react";
import NavBar from "./components/Navbar/NavBar.js";
import HeroCarousel from "./components/herocarousel/HeroCarousel.js";
const App = () => {
  return (
    <Fragment>
      <NavBar />
      <HeroCarousel/>
      <main>
        <h1>
          Hero Section
        </h1>
      </main>
    </Fragment>
  );
};
export default App;

import { Fragment, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
const NavBar = lazy(()=>import('../Navbar/NavBar.js'));
const Footer = lazy(() => import("../footer/Footer.js"));

const MainPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<h1>Loading...</h1>}>
      <NavBar />
      <Outlet/>
      <Footer />
       </Suspense>
    </Fragment>
  );
};
export default MainPage;

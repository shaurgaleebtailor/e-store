import { Fragment,lazy,Suspense } from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const MainPage = lazy(()=> import('./components/MainPage/MainPage.js'));
const HomePage = lazy(()=>import('./components/Home/HomePage.js'));
const ElectronicsPage = lazy(()=>import('./components/Electronics/Electronics.js'));
const JewelleryPage = lazy(()=>import('./components/Jewellery/Jewellery.js'));
const MensPage = lazy(()=>import('./components/Mens/Mens.js'));
const WomensPage = lazy(()=>import('./components/Womens/Womens.js'));
const routerInstances = [
  {
    path:'/',
    element:<MainPage/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path :"Electronics",
        element:<ElectronicsPage/>
      },
      {
        path : "Jewellery",
        element:<JewelleryPage/>
      },
      {
        path:"Mens-clothing",
        element: <MensPage/>
      },
      {
        path:"Womens-clothing",
        element: <WomensPage/>
      }
    ]
  },
{
  path:'*',
  element:<div><h1>Page Not Found</h1></div>
}]
const router = createBrowserRouter(routerInstances);

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
      <RouterProvider router={router}/>
      </Suspense>
     </Fragment>
  );
};
export default App;

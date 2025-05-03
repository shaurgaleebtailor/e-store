import { Fragment, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainPage = lazy(() => import("./components/MainPage/MainPage.js"));
const HomePage = lazy(() => import("./components/Home/HomePage.js"));
const ElectronicsPage = lazy(() => import("./components/Electronics/Electronics.js"));
const JewelleryPage = lazy(() => import("./components/Jewellery/Jewellery.js"));
const MensPage = lazy(() => import("./components/Mens/Mens.js"));
const WomensPage = lazy(() => import("./components/Womens/Womens.js"));
const Person = lazy(()=>import('./components/Mens/Person.js'));

const routerInstances = [
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "electronics",
        element: <ElectronicsPage />,
      },
      {
        path: "jewellery",
        element: <JewelleryPage />,
      },
      {
        path: "mens-clothing",
        element: <MensPage />,
      },
      {
        path: "womens-clothing",
        element: <WomensPage />,
      },
    ],
  },{
    path:"mens-clothing/:id",
    element:<Person/>
  },
  {
    path: "*",
    element: (
      <div>
        <h1>Page Not Found</h1>
      </div>
    ),
  },
];
const router = createBrowserRouter(routerInstances);

const App = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </Fragment>
  );
};
export default App;

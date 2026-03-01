import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/home.jsx";
import Error from "./component/ErrorWindow.jsx";
import Home1 from "./component/data/home1.jsx";
import Nodata from "./component/data/Nodata.jsx";
import Mhome from "./component/maindata/Mhome.jsx";
import ErrorBoundary from "./component/hcomponent/ErrorBoundry.jsx";
const router=createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/data/:city/:radius/:rating",element:<Home1/>},
  {path:"/error",element:<Error/>},
  {
    path:"/Nodata",element:<Nodata/>
  },
  {path:"/data/:name/:xid/:rate/true",element:<Mhome/>},
  {path:"/*",element:<Error/>}
  
]);

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(
  <div>
    <ErrorBoundary>
    <RouterProvider router={router}/>
    </ErrorBoundary>
  </div>
);
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Page1 from "./components/6.Router/Page1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

  },
  {
    path:"/p2",
    element:<Page2/>,
  }
  {
    path:"/super",
    element:<Page1/>,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

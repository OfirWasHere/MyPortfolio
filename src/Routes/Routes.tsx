import React from "react";
import Main from "../Components/Main/Main";
import Root from "../Components/Root/Root";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import Contact from "../Components/Contact/Contact";

const Routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "home",
        element: <Main />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];

export default Routes;

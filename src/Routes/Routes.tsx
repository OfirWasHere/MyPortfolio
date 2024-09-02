import React from "react";
import Main from "../components/Main/Main";
import Root from "../components/Root/Root";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Contact from "../components/Contact/Contact";

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
      {
        path: "art portfolio",
        element: <Contact />,
      },
    ],
  },
];

export default Routes;

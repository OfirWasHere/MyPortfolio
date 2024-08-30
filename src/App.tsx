import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import TopDrawer from "./Components/TopDrawer/TopDrawer";
import { Provider } from "react-redux";
import store from "./Store/Store";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <TopDrawer />
        <Navbar />
        <RouterProvider router={createBrowserRouter(Routes)} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;

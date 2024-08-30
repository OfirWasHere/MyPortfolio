import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import { Box } from "@mui/material";
import TopDrawer from "./Components/TopDrawer/TopDrawer";
import { Provider } from "react-redux";
import store from "./Store/Store";

function App() {
  return (
    <Provider store={store}>
      <TopDrawer />
      <Navbar />
      <RouterProvider router={createBrowserRouter(Routes)} />
    </Provider>
  );
}

export default App;

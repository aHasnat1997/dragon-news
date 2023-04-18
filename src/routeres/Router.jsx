import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { loadedNews } from "../utilites/loader";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: loadedNews
  }
])

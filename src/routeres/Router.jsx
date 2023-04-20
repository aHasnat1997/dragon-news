import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SingleNews from "../components/SingleNewsDetails/SingleNews";
import Layout from "../components/Main/Layout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Layout />
      },
      {
        path: 'details/:id',
        element: <SingleNews />
      }
    ]
  }
]);

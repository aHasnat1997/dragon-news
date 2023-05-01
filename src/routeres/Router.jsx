import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SingleNews from "../components/SingleNewsDetails/SingleNews";
import Layout from "../components/Main/Layout";
import LogIn from "../components/userLog/LogIn";
import Register from "../components/userLog/Register";
import Categories from "../components/Main/Categories";
import Main from "../components/Main/Main";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Main />
          },
          {
            path: 'categories/:id',
            element: <Categories />
          }
        ]
      },
      {
        path: 'details/:id',
        element: <ProtectedRoute><SingleNews /></ProtectedRoute>
      }
    ]
  },
  {
    path: 'log-in',
    element: <LogIn />
  },
  {
    path: 'register',
    element: <Register />
  }
]);

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Home/SignIn";
import SignUp from "../SignUp/SignUp";
import UpdateProfile from "../Pages/Home/UpdateProfile";
import UserProfile from "../Pages/Home/UserProfile";
import PrivateRoute from "./PrivateRoute";
import DetailsPage from "../Pages/Shared/Navbar/DetailsPage";
import ErrorElements from "../error-element/error-element";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:detailId",
        element: <DetailsPage></DetailsPage>,
      },
    ],
  },
]);

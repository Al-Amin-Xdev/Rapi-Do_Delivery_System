import { createBrowserRouter } from "react-router";
import RootLayout from "../Root-Layout/RootLayout";
import Home from "../pages/home-page/home/Home";
import Coverage from "../pages/coverage/Coverage";
import AuthLayout from "../root-layout/AuthLayout";
import Register from "../pages/auth-page/Register";
import Login from "../pages/auth-page/Login";
import Reset from "../pages/auth-page/Reset";
import Rider from "../pages/Rider-page/Rider";
import PrivateRoute from "../Private-Route/PrivateRoute";
import SendParcel from "../pages/Send-Parcel/SendParcel";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home},
      { path: '/rider', element: <PrivateRoute><Rider></Rider></PrivateRoute>},
      { path: '/send-parcel',
        loader: ()=> fetch("./location.json").then(res=>res.json()),
        element: <SendParcel></SendParcel>},
      { path: '/coverage',
        loader: ()=> fetch("./location.json").then(res=>res.json()),
        Component: Coverage},
    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children:[
      {path: '/register', Component: Register},
      {path: '/login', Component: Login},
      {path: '/reset', Component: Reset},
    ]
  }
]);
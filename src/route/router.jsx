import { createBrowserRouter } from "react-router";
import RootLayout from "../Root-Layout/RootLayout";
import Home from "../pages/home-page/home/Home";
import Coverage from "../pages/coverage/Coverage";
import AuthLayout from "../root-layout/AuthLayout";
import Register from "../pages/auth-page/Register";
import Login from "../pages/auth-page/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home},
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
    ]
  }
]);
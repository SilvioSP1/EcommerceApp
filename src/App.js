import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductsItemPage from "./pages/ProductsItemPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import Layaout from "./pages/Layaout";
import LayaoutSecundary from "./pages/LayaoutSecundary";
import Checkout from "./pages/Checkout";
import Loader from "./components/loader/Loader"
import { useAuthToken } from "./hooks/useAuth"
import { useAuthCart } from "./hooks/useCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layaout />,
    loader: Loader,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: Loader,
      },
      {
        path: "products",
        element: <ProductsPage />,
        loader: Loader,
      },
      {
        path: "products/:id",
        element: <ProductsItemPage  />,
        loader: Loader,
      },
      {
        path: "cart",
        element: <CartPage />,
        loader: Loader,
      },
      {
        path: "account",
        element: <AccountPage />,
        loader: Loader,
      },
      {
        path: "cart/checkout",
        element: <Checkout />,
        loader: Loader,
      },
    ],
  },
  {
    path: "/",
    element: <LayaoutSecundary />,
    loader: Loader,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "login",
        element: <LoginPage />,
        loader: Loader,
      },
      {
        path: "register",
        element: <RegisterPage />,
        loader: Loader,
      },
    ],
  },
]);

export default function App() {
  useAuthCart()
  useAuthToken()
  return <RouterProvider router={router} />;
}


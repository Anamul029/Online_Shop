import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import SpecialDeal from './Components/SpecialDeal/SpecialDeal.jsx';
import FeaturedDetail from './Components/Featured Product/FeaturedDetail.jsx';
import ShopCart from './Components/ShopingCart/ShopCart.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <SignUp />,
      },
      {
        path: 'specialdeal',
        element: <SpecialDeal />,
      },
      {
        path:'shopCart',
        element:<ShopCart/>,
      },
      {
        path: "/details/:_id",
        element: <FeaturedDetail />,
        loader: () => fetch('http://localhost:5000/featuredProduct')

      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)

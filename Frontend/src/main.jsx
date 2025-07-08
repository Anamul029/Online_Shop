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
import CheckoutPage from './Components/PaymentGateway/CheckoutPage.jsx';
import DashBoard from './Components/Dashboard/AdminDashboard.jsx';
import DownNavBar from './Components/NavBar/DownNavBar.jsx';
import PostData from './Components/Dashboard/PostData.jsx';

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
        path: 'shopCart',
        element: <ShopCart />,
        loader: () => fetch('https://electro-server-nine.vercel.app/carts',)
      },
      {
        path: "/details/:_id",
        element: <FeaturedDetail />,
        loader: () => fetch('https://electro-server-nine.vercel.app/featuredProduct')

      },
      {
        path:'checkout',
        element:<CheckoutPage/>
      }
    ],
  },
  {
    path:'/dashboard',
    element:<DashBoard/>,
    children:[
      {
        path:'/dashboard',
        element:<PostData/>,
      },
    ]
  },
 {
  path:'/down',
  element:<DownNavBar/>,
 } 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)

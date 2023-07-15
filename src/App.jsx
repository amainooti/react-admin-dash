import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import { Products } from "./pages/products/Products";
import { Users } from "./pages/users/Users";
import Login from "./pages/login/Login";


// Layout component for the arrangement of the website
const Layout = () => {
  return <div className="main">
    <Navbar />
    <div className="container">
      <div className="menu-container">
        <Menu />
      </div>
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  </div>
}



export const App = () => {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "users",
            element: <Users />,
          }
        ]
      },
      {
        path: "login",
        element: <Login />,
      }
    ]
  );

  return <RouterProvider router={router} />;
}

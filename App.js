import React, { lazy,Suspense, useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import ErrorElement from "./src/Components/ErrorElement";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ResturantMenu from "./src/Components/ResturantMenu";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import store from "./src/utils/Store";
import Cart from "./src/Components/Cart"
// import Offers from "./src/Components/Offers"; use as lazy load when click only after load this component loads

// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "Hello React Igniting our app"
// );

// const heading2 = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "hello React"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading1, heading2]
// );

const Offers = lazy(()=>import("./src/Components/Offers"));

const FoodVilla =()=>{

  const[user,setUser] = useState({
      name:"tushar khatri",
      email:"tushrkhat@gmail.com",
  });
     
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
}

const AppRouter= createBrowserRouter([
   {
    path:'/',
    element:<FoodVilla />,
    errorElement:<ErrorElement />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
          path:'/about',
          element:<About />,
      },
      {
        path:'/contact',
        element:<Contact />,
      },
      {
        path:'/offers',
        element:<Suspense fallback={"loading......."}>  {/* fallback is a prop which take some content which is load when ofer page loading in broweser so we can show something other to the user for better user experiense */}
          <Offers />
        </Suspense>,
      },
      {
        path:'/resturant/:resId',
        element:<ResturantMenu />,
      },
      {
        path:'/cart',
        element:<Cart />,
      }
    ],

   }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);

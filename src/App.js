import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import { IconName } from "react-icons/";
// import Grocery from "./components/Grocery";

/**
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - search
 *  - Restaurant Container
 *      - Restaurant Card
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

// we will try to use lazy loading
// We won't bundle grocery with all components. We will bundle grocery sepeartely while we clicked on Grocery nav
const Grocery = lazy(() => import("./components/Grocery"));

// Creating a App Layout
const AppLayout = () => {
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        // Api call
        const data = {
            user: "Pavan Kumar"
        }
        setUserName(data.user);
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

// Creating the Routing configuration
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/resmenu/:resId",
                element: <ResMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading......</h1>}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);

// we have to change how we basically render
// now we have to pass the appRouter which is routing configuration to our App by using RouterProvider
root.render(<RouterProvider router={appRouter} />);

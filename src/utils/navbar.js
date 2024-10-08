import useUniqueId from "../hooks/useId";
import { HomePage } from "../pages/home";
import { PropertiesPage } from "../pages/properties";
export const navbar = [
    {id: useUniqueId, title: "Home",path: "/home", element: <HomePage/>, private: false, hidden: false},
    {id: useUniqueId, title: "Properties",path: "/properties", element: <PropertiesPage/>, private: false, hidden: false},
    {id: useUniqueId, title: "Sign in",path: "/signin", element: <h1>Sign in page</h1>, private: false, hidden: true},
];
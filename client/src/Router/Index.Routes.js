import Standart from "../Components/Standart/Standart";
import AboutUs from "../Pages/User/AboutUs/AboutUs";
import Cart from "../Pages/User/Cart/Cart";
import ContactUs from "../Pages/User/ContactUs/ContactUs";
import FAQPage from "../Pages/User/FAQPage/FAQPage";
import Gallery from "../Pages/User/Gallery/Gallery";
import Home from "../Pages/User/Home/Home";
import Portfolio from "../Pages/User/Portfolio/Portfolio";
import UserRoot from "../Pages/User/UserRoot";
import AdminRoot from "../Pages/Admin/AdminRoot"
import AdminDashboard from "../Pages/Admin/Dashboard"
import AdminAuth from "../Pages/Admin/Auth"
import Products from "../Pages/Admin/Products/Products";
 import Categories from "../Pages/Admin/Categories/Categories";
import HomeCategories from '../Pages/User/Categories/Categories'


const ROUTER = [
    {
        path:"/",
        element: <UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/categories/:slug",
                element:<HomeCategories/>
            },
            {
                path:"/faqPage",
                element:<FAQPage/>
            },
            {
                path:"/gallery",
                element:<Gallery/>
            },
            {
                path:"/aboutUs",
                element:<AboutUs/>
            },
            {
                path:"/contactUs",
                element:<ContactUs/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/standart",
                element:<Standart/>
            },
            {
                path:"/portfolio",
                element:<Portfolio/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminAuth />,
    },
    {
        path:"/admin/*",
        element: <AdminRoot/>,
        children:[
            {
                path: "dashboard",
                element: <AdminDashboard/>
            },
            {
                path:"products",
                element:<Products/>
            },
            {
                path:"categories",
                element:<Categories/>
            },

        ]
    }
]



export default ROUTER
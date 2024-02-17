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
import Link from "../Pages/User/Link/Link";
import Audio from "../Pages/User/Audio/Audio";
import MyAccount from "../Pages/User/MyAccount/MyAccount";
import Quote from "../Pages/User/Quote/Quote";
import Videos from "../Pages/User/Videos/Videos";


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
                path:"/link",
                element:<Link/>
            },
            {
                path:"/contactUs",
                element:<ContactUs/>
            },
            {
                path:"/myAccount",
                element:<MyAccount/>
            },
            {
                path:"/quote",
                element:<Quote/>
            },
            {
                path:"/audio",
                element:<Audio/>
            },
            {
                path:"/videos",
                element:<Videos/>
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
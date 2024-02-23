import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ROUTER from "./Router/Index.Routes"
import './App.css'
import {useEffect, useState} from "react";
import axios from "axios"
import dataContext from "./Context/Context";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {handleSuccess} from "./Helpers/Helpers";
import {AuthProvider} from "./Context/AuthContext";
import Axios from "./Helpers/Axios";
import {useAuth} from "./Context/AuthContext";

const router = createBrowserRouter(ROUTER)

function App() {
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    const [basket, setbasket] = useState(
        localStorage.getItem("BasketItem") ? JSON.parse(localStorage.getItem("BasketItem")) : []
    );


    const removeFromBasket = (itemId) => {
        const itemIndex = basket.findIndex(item => item.id == itemId);
        if (itemIndex > -1) {
            basket.splice(itemIndex, 1);
            setbasket([...basket]);
            localStorage.setItem("BasketItem", JSON.stringify([...basket]));
            handleSuccess('Məhsul səbətdən silindi')
        }
    };

    const decreaseBtn = (itemId) => {
        const target = basket.find(item => item.id == itemId);
        if (target && target.count > 1) {
            target.count -= 1
            target.totalPrice = target.product.price * target.count;
            setbasket([...basket]);
            localStorage.setItem("BasketItem", JSON.stringify([...basket]));
        }
    }

    const increaseBtn = (itemId) => {
        const target = basket.find(item => item.id == itemId);
        if (target && target.count + 1 <= target.product.quantity) {
            target.count += 1
            target.totalPrice = target.product.price * target.count;
            setbasket([...basket]);
            localStorage.setItem("BasketItem", JSON.stringify([...basket]));
        }
    }

    const AddtoBasket = (product, count = 1) => {
        const target = basket.find(item => item.product._id == product._id);
        if (target) {
            target.count += count;
            target.totalPrice = product.price * target.count;
            setbasket([...basket]);
            localStorage.setItem("BasketItem", JSON.stringify([...basket]));
            handleSuccess('Səbətə əlavə edildi')
        } else {
            const BasketProduct = {
                id: product._id,
                product: product,
                count: count,
                totalPrice: product.price
            };
            setbasket([...basket, BasketProduct]);
            localStorage.setItem("BasketItem", JSON.stringify([...basket, BasketProduct]));
            handleSuccess('Səbətə əlavə edildi 2')
        }
    };

    const value = {
        data,
        setData,
        AddtoBasket,
        basket,
        removeFromBasket,
        decreaseBtn,
        increaseBtn
    }

    return (
        <AuthProvider>
            <dataContext.Provider value={value}>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <RouterProvider router={router}/>
            </dataContext.Provider>
        </AuthProvider>
    );
}

export default App;

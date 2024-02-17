import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ROUTER from "./Router/Index.Routes"
import './App.css'
import {useEffect, useState} from "react";
import axios from "axios"
import dataContext from "./Context/Context";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleSuccess } from "./Helpers/Helpers";

const router = createBrowserRouter(ROUTER)

function App() {
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    const [basket, setbasket] = useState(
        localStorage.getItem("BasketItem") ? JSON.parse(localStorage.getItem("BasketItem")) : []
      );




      const removeFrombasket = (product) => {
        const target = basket.find(item => item._id == product._id);
        basket.splice(basket.indexOf(target), 1);
        setbasket([...basket]);
        localStorage.setItem("BasketItem", JSON.stringify([...basket]));
    
        // toast.error("Səbətdən silindi.");
      };
    
      const AddtoBasket = (product) => {
        const target = basket.find(item => item.product._id == product._id);
        if (target) {
          target.count += 1;
          target.totalPrice = product.price * target.count;
          setbasket([...basket]);
          localStorage.setItem("BasketItem", JSON.stringify([...basket]));
          handleSuccess('Səbətə əlavə edildi')
        } else {
          const BasketProduct = {
            id: product._id,
            product: product,
            count: 1,
            totalPrice: product.price
          };
          setbasket([...basket, BasketProduct]);
          localStorage.setItem("BasketItem", JSON.stringify([...basket, BasketProduct]));
          handleSuccess('Səbətə əlavə edildi')
        }
      };

    useEffect(() => {
        axios.get("http://localhost:8080/users").then(res => {
            setData(res.data)
        }).catch(err => {
            setError(err)
        })
    }, [])

    const value = {
        data, setData,    AddtoBasket,
        basket

    }

    return (

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

    );
}

export default App;

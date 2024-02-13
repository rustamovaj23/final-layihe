import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ROUTER from "./Router/Index.Routes"
import './App.css'
import {useEffect, useState} from "react";
import axios from "axios"
import dataContext from "./Context/Context";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(ROUTER)

function App() {
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8080/users").then(res => {
            console.log(res.data)
            setData(res.data)
        }).catch(err => {
            setError(err)
        })
    }, [])

    const value = {
        data, setData
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

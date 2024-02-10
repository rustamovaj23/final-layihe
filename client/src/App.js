import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ROUTER  from "./Router/Index.Routes"
import './App.css'
import { useEffect, useState } from "react";
import axios from "axios"
import dataContext from "./Context/Context";


const router=createBrowserRouter(ROUTER)
function App() {
  const [data, setData] = useState([])
  const [ error,setError] = useState("")

  useEffect(()=>{
    axios.get("http://localhost:8080/users").then(res=>{
      console.log(res.data)
      setData(res.data)
    }).catch(err=>{
      setError(err)
    })
  }, [])

  const value={
    data, setData
  }

  return (

      <dataContext.Provider value={value}>
      <RouterProvider router={router}/>
      </dataContext.Provider>

  );
}

export default App;

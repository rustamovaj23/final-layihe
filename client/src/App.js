import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ROUTER  from "./Router/Index.Routes"
import './App.css'

const router=createBrowserRouter(ROUTER)
function App() {
  return (
    <div className="App">
      <>
      <RouterProvider router={router}/>
      </>
    </div>
  );
}

export default App;

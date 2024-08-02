import logo from './logo.svg';
import './App.css';
import'../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import About from './component/About/About';
import Portfolio from './component/Portfolio/Portfolio';
import Contant from './component/Contant/Contant';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import { ThemeProvider } from "@material-tailwind/react";
 
{/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script> */}

 let x=createBrowserRouter([{path:"",element:<Layout/>,children:[

  {index:true,element:<Home/>},
  {path:"about",element:<About/>},
  {path:"portfolio",element:<Portfolio/>},
  {path:"contant",element:<Contant/>},
  {path:"*",element:<NotFound/>}

]






 }])

function App() {
  return <>

<RouterProvider router={x}></RouterProvider>
  </>
    
}

export default App;
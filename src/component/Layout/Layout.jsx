import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

import { Nav } from 'react-bootstrap'
export default function Layout() {
  return (
    <>
   <Navbar/>
<div className=' w-full    mt-14 ' >
  

  

<Outlet/>



</div>
<Nav/>





<Footer/>
   </>
  )
}

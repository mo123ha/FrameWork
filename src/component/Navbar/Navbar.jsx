import React from 'react'
import{Link, NavLink} from'react-router-dom'
import  { useState } from 'react';
// import NavBar from 'react-bootstrap/Navbar';


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  return (

<>
    <nav className="bg-[#2C3E50]  fixed top-0 left-0 right-0 py-5  z-50">
      <div className="container mx-auto flex items-center justify-between p-4 ">
        <div className="flex items-center text-white font-bold text-[30px]">
        <h1>START FRAMEWORK  </h1>
        </div>
        <div className="hidden md:flex  divide-x-[16px] text-white divide-transparent font-bold text-[20px]">
          
        <NavLink  to="about">ABOUT</NavLink>    
           <NavLink to="portfolio">PORTFOLIO</NavLink> 
           <NavLink to="contant">CONTANT </NavLink>
          
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-400 focus:outline-none focus:ring-2 "
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          {isOpen && (
            
            
        <div className="absolute top-[80%] left-0 w-full bg-gray-800 mt-2  py-5 divide-y -[16px] text-white divide-transparent font-bold text-[20px]">
      <ul className=''>
        <li className='p-2'> <NavLink  to="about">ABOUT</NavLink>  </li>
        <li  className='p-2'>   <NavLink to="portfolio">PORTFOLIO</NavLink> </li>
    <li  className='p-2'>   <NavLink to="contant">CONTANT </NavLink></li>
      </ul>
             
            </div>
          )}
        </div>
      </div>
    </nav>
</>
  )
}















 
  //  <div className='   '>
  //   <div className='cont '>
  //     <div className='flex items-center justify-center flex-nowrap   md:flex-wrap     md:justify-between       '   >
  //       <div className='text-white font-bold text-[30px]' >
  //        >
  //       </div>

  //       <div>
  //         <ul className='flex flex-wrap    '>
  //          
  //         </ul>
  //       </div>
  //     </div>
  //   </div>


  //  </div>







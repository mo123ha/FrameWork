import React from 'react'
import { Button } from "@material-tailwind/react";
 


export default function Footer() {
  return (
<>
<div className='back p-8  relative bottom-0 left-0 right-0 z-0  '>
<div className="cont">
<div className="row p-5">
  <div className='sm:w-full  sm:p-2  md:w-1/3  md:p-5   text-white text-center '>
    <h1 className=' font-bold text-[30px] mb-3'>LOCATION</h1>
    <h3 className='mb-3
    '>2215 John Daniel Drive</h3>
    <p>Clark, MO 65243</p>
  </div>
  <div className='sm:w-full sm:p-2 md:w-1/3 md:p-5     text-white font-bold text-[30px] text-center'>
    <h1>AROUND THE WEB</h1>
   <div className='row  w-full  text-center  
    justify-center  mt-5'>
  <div className='icon flex justify-center items-center me-1'>
  <i className="fab fa-facebook    text-2xl" ></i>
  </div>
  
  
  <div className='icon flex justify-center items-center me-1
  '>
  <i className="fab fa-twitter    text-2xl" ></i>
  </div>
  <div className='icon flex justify-center items-center me-1
  '>
  <i className="fab fa-linkedin-in   text-2xl" ></i>
  </div>
  <div className='icon flex justify-center items-center'>
  <i className="fas fa-globe   text-2xl" ></i>
  </div>

   </div>
   </div>
  <div className='sm:w-full sm:p-2 md:w-1/3 md:p-5  text-center  text-white'>
    <h1 className='font-bold text-[25px]    '>ABOUT FREELANCER</h1>
    <p className=''>Freelance is a free to use, licensed Bootstrap theme created by Route</p>


 

  </div>
  
    </div>
</div>
    

</div> 
<div className=' bg-[#212529] text-center text-white p-5  ' >
    <h1>Copyright © Your Website 2021
    
    </h1>
</div>
</>
  )
}

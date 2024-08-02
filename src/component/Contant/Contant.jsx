import React from 'react'

export default function Contant() {
  return (
   <>
  <div className='w-full h-screen   '>
    <div className=' cont py-16 h-screen text-red   '>
    <div className='  flex items-center justify-center  text-[#2C3E50]'>
      <div className='p-10 mt-5     text-slate-700    '>
 
    <h1 className=' sm:text-[20px]    sm:mt-2      md:font-bold   uppercase     md:text-[40px]  text-center'>conatct sectionT</h1>
        
        <div className='row m-3  text-center justify-center items-center  '>
        <div className="line1 me-3   t"></div>
        <i className='fas fa-star  text-slate-800 mb-3' ></i>
        <div className="line1 ms-3  "></div>
        </div>
        </div>
        </div>
    <div className=' w-full py-10 '>
    <form className=" mx-auto w-[90%]    "  >
    <div className="relative z-0  md:w-[80%] mb-5 group mx-auto ">
      <input type="name" name="floating_name" id="floating_Name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=""  />
      <label htmlFor="floating_name" className="peer-focus:font-bold absolute text-xl  text-gray-500  uration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName :</label>
  </div>
  <div className="relative z-0 sm:w-[80%]  md:w-[80%] mb-5 group mx-auto  ">
      <input type="name" name="floating_age" id="floating_Age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=""  />

      <label htmlFor="floating_age" className="peer-focus:font-bold absolute text-xl text-gray-500   uration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge :</label>
  </div>
  <div className="relative z-0 sm:w-[80%]  md:w-[80%] mb-5 group mx-auto  ">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=""  />

      <label htmlFor="floating_age" className="peer-focus:font-bold absolute text-xl  text-gray-500 uration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail :</label>
  </div>
  <div className="relative z-0 sm:w-[80%]  md:w-[80%] mb-5 group  mx-auto ">
      <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=""  />

      <label htmlFor="floating_age" className="peer-focus:font-bold absolute text-xl text-gray-500   uration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] 
      
    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword :</label>
  
  
  <button type="button" className="px-4 py-2 text-base font-medium text-center rounded-md text-white bg-[#1abc9c] rounded-lgfocus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 ">Send message</button>
  </div>


   
   </form> 
    </div>
   
    </div>
    
  </div>
  

  
   </>
  )
}

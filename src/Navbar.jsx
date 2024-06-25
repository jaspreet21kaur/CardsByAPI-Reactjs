import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className=' m-10 z-3 sticky'>
        <div className='flex items-center  ml-[18rem] w-full'>

         <h1 className='font-bold text-3xl text-red-900'>Cards</h1>
         <div className='flex justify-center items-center gap-x-3'>
            <Link to={"/"}><button className='bg-red-900 px-3 py-1 rounded-md text-white ml-[24rem]'>Home</button></Link>
            <Link to={"/create"}><button className='bg-red-900 px-3 py-1 rounded-md text-white '>Add Card</button></Link>

         </div>
        </div>
    </div>

  )
}

export default Navbar
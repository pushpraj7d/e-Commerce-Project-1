import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Details from '../pages/Details'

const Home = () => {
  return (
    <>
    <Nav/>
      <Link to="details" className=' w-screen h-screen p-10  flex gap-7 overflow-x-hidden flex-wrap'>
          <div className='w-60 h-80 p-1 rounded-md border border-black flex flex-col items-center justify-center'>
            <img className='w-[75%] hover:scale-102 rounded-md h-[75%] object-cover' src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h3 className='font-semibold mt-2 cursor-pointer hover:text-blue-500'>Lorem ipsum dolor sit amet.</h3>
          </div>
     </Link>
    </>
  )
}

export default Home
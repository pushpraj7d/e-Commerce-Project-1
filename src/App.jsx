import React from 'react'


const App = () => {
  return (
   <div className='h-screen w-screen flex'>
    <nav className='bg-zinc-200 w-[20%] h-screen flex flex-col items-center'>
        <a  className='text-blue-900  text-2xl mt-5 font-semibold border px-3 py-2 rounded-md border-blue-800' href="/create">Add New Product</a>
        <hr className='w-[80%] my-5 border-black'/>
        <h2 className='text-2xl w-[80%] font-semibold'>Category Filter</h2>
        <ul className=' w-[80%] mt-3 flex flex-col gap-2'>
          <li className='flex items-center gap-3'> <span className='bg-red-900 w-5 h-5 rounded-full'></span> cat 1</li>
          <li className='flex items-center gap-3'> <span className='bg-blue-900 w-5 h-5 rounded-full'></span> cat 2</li>
          <li className='flex items-center gap-3'> <span className='bg-green-900 w-5 h-5 rounded-full'></span> cat 3</li>
        </ul>
    </nav>
        <div className=' w-screen h-screen p-10  flex gap-7 overflow-x-hidden flex-wrap'>
          <div className='w-60 h-80 p-1 rounded-md border border-black flex flex-col items-center justify-center'>
            <img className='w-[75%] hover:scale-102 rounded-md h-[75%] object-cover' src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h3 className='font-semibold mt-2 cursor-pointer hover:text-blue-500'>Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>

   </div>
  )
}

export default App
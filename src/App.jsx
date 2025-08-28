import React from 'react'


const App = () => {
  return (
   <div className='h-screen w-screen'>
    <nav className='bg-zinc-300 w-[20%] h-screen flex flex-col items-center'>
        <a  className='text-blue-900  text-2xl mt-5 font-semibold border px-3 py-2 rounded-md border-blue-800' href="/create">Add New Product</a>
        <hr className='w-[80%] my-5 border-black'/>
        <h2 className='text-2xl w-[80%] font-semibold'>Category Filter</h2>
        <ul className=' w-[80%] mt-3 flex flex-col gap-2'>
          <li className='flex items-center gap-3'> <span className='bg-red-900 w-5 h-5 rounded-full'></span> cat 1</li>
          <li className='flex items-center gap-3'> <span className='bg-blue-900 w-5 h-5 rounded-full'></span> cat 2</li>
          <li className='flex items-center gap-3'> <span className='bg-green-900 w-5 h-5 rounded-full'></span> cat 3</li>
        </ul>
    </nav>

    
   </div>
  )
}

export default App
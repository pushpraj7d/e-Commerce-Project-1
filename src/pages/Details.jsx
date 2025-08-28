import React from 'react'

const Details = () => {
  return (
    <div className=' h-[75%] w-[50%] m-auto flex  items-center justify-center '>
        <img className='w-[35%] h-[60%] object-cover mr-15' src="https://plus.unsplash.com/premium_photo-1678739466642-8b4edf3d75ea?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div>
            <h1 className='text-4xl font-semibold '>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1> {/*title*/}
            <h3 className='font-semibold text-zinc-700 mt-1'>men's clothing</h3> {/*category*/}
            <h3 className='text-red-600 font-semibold mt-3'>$ 109.95</h3> {/*Price*/}
            <p className=' text-zinc-800'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p> {/*description*/}
            <div className='mt-5'>
                <a  className='text-blue-900  text-md mt-5 mr-3 font-semibold border px-3 py-1 rounded-md border-blue-800' >Edit</a>
                <a  className='text-red-900  text-md mt-5 mr-3 font-semibold border px-3 py-1 rounded-md border-red-800' >Delete</a>
            </div>
        </div>
    </div>
  )
}

export default Details
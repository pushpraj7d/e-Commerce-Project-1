import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Details from '../pages/Details'
import {productContext} from "../Utils/Context"
import Loading from './Loading'

const Home = () => {
  const [products] = useContext(productContext);
  console.log(products);

  return (products?
    <>  
    <Nav/>


    <div className=' w-screen  h-screen  flex gap-2  overflow-x-hidden flex-wrap'>

        {products.map((item,index) =>(
          <Link to={`/details/${item.id}`} className='w-60 h-80 m-3 p-2'>
          <div className='w-60 h-80 p-1  rounded-md border border-black flex flex-col items-center justify-center'>
          <img className='w-[75%] hover:scale-105 rounded-md h-[75%] object-contain' src={item.image} alt="" />
          <h3 className='font-semibold mt-2 cursor-pointer hover:text-blue-500'>{item.title}</h3>
          </div>
          </Link>
        ))}

      
    </div>
    </>
    :<Loading/>
  )
}

export default Home
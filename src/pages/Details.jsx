import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productContext } from '../Utils/Context';
import axios from "../Utils/axios";
import Loading from '../Components/Loading';


const Details = () => {
   const[products,setproducts] = useState(null);
   const{id} = useParams();

   const getsingleproduct = async () =>{
    try {
      const {data} = await axios.get(`/products/${id}`);
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
   }
   
  
   useEffect(() =>{
    getsingleproduct();
   }, [id])
  return ( products ?
    <div className=' h-[75%] w-[50%] m-auto flex  items-center justify-center '>
        <img className='w-[45%] h-[60%] object-contain  mr-15 ' src={`${products.image}`} alt="" />
        <div>
            <h1 className='text-4xl font-semibold '>{products.title}</h1> {/*title*/}
            <h3 className='font-semibold text-zinc-700 mt-1'>{products.category}</h3> {/*category*/}
            <h3 className='text-red-600 font-semibold mt-3'>{products.price}</h3> {/*Price*/}
            <p className=' text-zinc-800'>{products.description}</p> {/*description*/}
            <div className='mt-5'>
                <a  className='text-blue-900  text-md mt-5 mr-3 font-semibold border px-3 py-1 rounded-md border-blue-800' >Edit</a>
                <a  className='text-red-900  text-md mt-5 mr-3 font-semibold border px-3 py-1 rounded-md border-red-800' >Delete</a>
            </div>
        </div>
    </div>
    : <Loading/>
  )
}

export default Details
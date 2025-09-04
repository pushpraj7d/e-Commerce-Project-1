import axios from './axios';
import React, { createContext, useEffect } from 'react'
import { useState } from 'react'

export const productContext = createContext();

const Context = (props) => {
   
  const [products, setproducts] = useState(null);

  const getProducts = async()=>{
    try {
      const {data} = await axios.get("/products");
      
      setproducts(data);
    } catch (error) {
      console.log();
    } 
  }

  useEffect(()=>{
    getProducts();
  }, []);

  return <productContext.Provider value={[products, setproducts]}>
    {props.children}
  </productContext.Provider>
  
}

export default Context
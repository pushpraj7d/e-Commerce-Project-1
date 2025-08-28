import React from 'react'
import { useState } from 'react'

const Context = (props) => {
   
  const [products, setproducts] = useState(null)  
  return <div>
    {props.children}
  </div>
  
}

export default Context
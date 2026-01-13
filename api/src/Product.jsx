import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



const Product = () => {
    
    // const [params] = useSearchParams();
    // const id = params.get("id");
    // const name = params.get("name");

    const {state} = useLocation();
    const id = state.id;
    const name = state.name;

  return (
    <div>
      <h1>Product details: </h1>

      <p>Product ID: {id}</p>
      <p>Product name: {name}</p>

    </div>
  )
}


export default Product;



import './NewProduct.css'
import React from 'react'
import ProductForm from './ProductForm'

// Child to parent object accesing





export default function NewProduct(props) {

        
  function Bhandler(product){
    console.log('I am inside the Bhandler');
    console.log(product)

    // CALLING PARENT FUNTION
    props.onA(product);
  }
  

  return (
    <div className='new-product'>
      <ProductForm onB={Bhandler}></ProductForm>
    </div>
  )
}



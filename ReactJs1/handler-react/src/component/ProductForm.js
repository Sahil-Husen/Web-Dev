
import React, { useState } from 'react';
import './ProductForm.css'
function ProductForm(props) {


    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    function titleChangeHandler(event, previousState) {
        setTitle(event.target.value)

        //it print the value that is entered through the keyboard
        //  console.log(event.target.value)
    }

    function dateChangeHandler(event) {
        setDate(event.target.value)
        //it print the value that is entered through the keyboard
        // console.log(event.target.value)
    }
    //  multiple state handling
    function submitHandler(event) {
        event.preventDefault();
        const productData = {
            title: title,
            date: date,
        };
        console.log(productData)

        

        // child to parent accesing
        props.onB(productData);


        setTitle('');
        setDate('');
    }


    return (

        <form onSubmit={submitHandler}>
            <div className='productMain'>
                <div className='new-product-control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={title}></input>
                </div>

                <div className='new-product-control'>
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type='date' min='2024-05-11' max='2024-12-30' value={date}></input>
                </div>
                <button type='submit' className='new-product-button' >Add Product</button>
            </div>
        </form>
    );
}
export default ProductForm
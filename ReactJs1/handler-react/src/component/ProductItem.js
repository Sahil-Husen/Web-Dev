
import React,{useState} from 'react'
import ProductHeading from "./ProductHeading";
import Date from "./Date";
import './ProductItem.css'


function ProductItem(props) {

    
    const[title,setTitle] = useState(props.title)
    function clickHandler (){
         setTitle("popcorn")
     console.log("Clicked")
     }
    return (

        <>

            <div className="itemMain">
                <div className="itemDiv">


                    <div className='datediv'>    <Date date={props.date}></Date></div>

                    <div>

                        <ProductHeading title={title}></ProductHeading>
                    </div>

                    <button onClick={clickHandler} >Add to cart</button>
                </div>
            </div>


        </>

    )
}
export default ProductItem;
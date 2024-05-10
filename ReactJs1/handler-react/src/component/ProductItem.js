import ProductHeading from "./ProductHeading";
import Date from "./Date";
import './ProductItem.css'


function ProductItem(props) {

    
    function clickHandler (){

       
        console.log("Clicked")
     }
    return (

         function clickHandler (){

    let title = "popcorn";
    console.log("Clicked")
 }
        <>

            <div className="itemMain">
                <div className="itemDiv">


                    <div className='datediv'>    <Date date={props.date}></Date></div>

                    <div>

                        <ProductHeading title={props.title}></ProductHeading>
                    </div>

                    <button onClick={clickHandler} >Add to cart</button>
                </div>
            </div>


        </>

    )
}
export default ProductItem;
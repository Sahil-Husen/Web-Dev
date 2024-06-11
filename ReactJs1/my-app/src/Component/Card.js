import { useState } from "react";
// import Tour from "./Tour";

function Card({ id, name, image, info, price,removeTour }) {
    const [readmore, setReadmore] = useState(false)
    const description =  readmore ?info: `${info.substring(0, 200)}....`
    
    function readHandler() {
        setReadmore(!readmore);
    }
    

   
    return (
        <>

            <div className="card">
                <img src={image} alt="" className="image" />
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4>{name}</h4>
                    <div className="tour-description">
                        {description}
                        <span className="read-more" onClick={readHandler}> {readmore ? `Show Less` : `Read More`} </span>

                    </div>
                </div>
                <button className="btn-red" onClick={()=>{
                    removeTour(id)
                }}>Not Interested</button>
            </div>
        </>
    )
}
export default Card;
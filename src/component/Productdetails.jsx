import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Productdetails = () => {


    let{id}=useParams();
    let{data:products,pending,error}=useFetch(`http://localhost:4000/products/${id}`)

let handleCart=(()=>{
  let cartArray=localStorage.getItem("cart")
  cartArray=JSON.parse(cartArray)

  let present=cartArray.some((items)=>{return items.id==products.id})

  if(present==false)
  {
    cartArray.push(products)
    cartArray=JSON.stringify(cartArray)
    localStorage.setItem("cart",cartArray)
    alert("items has been adeede to cart")
  }
  else
  {
alert("items alreday present")
  }
})

    return ( 
        <div>
            {/* <h1>Product details page</h1> */}
            {
                products &&
               <div className="pd-page">
                 <div className="detailspage-display">
                    <img src={products.productPic} alt="" height="500" width="400" />
                  <div className="dbutton">
                  <button onClick={handleCart}>Add to cart</button>
                    <button >Buy now</button>
                  </div>
                 </div>   
                 <div className="detailsdesc">
                     <h4>{products.brand}</h4>
                     <h3>{products.description}</h3>
                     <h5>special price</h5>
                     <h3>{products.discountPrise}</h3>
                     <h4><strike>{products.mrp}</strike></h4>
                     <button>{products.rating}</button>
                  
                 </div>

                </div>

            }
        </div>
     );
}
 
export default Productdetails;
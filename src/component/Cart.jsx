import { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";

const Cart = () => {

    let[cart,setCart]=useState([])
    // let[totalprice,setTotalPrice]=useState(null)

    useEffect(()=>{
        let cartArray=localStorage.getItem("cart")
        cartArray=JSON.parse(cartArray)
        setCart(cartArray)
    },[])

    return ( 
        <div>
            <h1>cart page</h1>
          {cart && 
            cart.map((data)=>{
                return(
             <div className="cart1">
                
                <img src={data.productPic} alt="" height={200} width={200}/>
                   <div>
                    {data.brand}
                    {data.description}
                   
                   <strike> <h4>{data.mrp}</h4></strike>
                    <h3>{data.discountPrise}</h3>
                   </div>
                    
                     
             </div>


            )})
          }
        </div>
     );
}
 
export default Cart;
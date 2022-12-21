import React, { useEffect } from "react";
import DisplayProducts from "./DisplayProducts";
import useFetch from "./useFetch";
import Navbar from "./Navbar";
import NavbarSecond from "./NavbarSecond";
import Carousel from "./Carousel";

const Home = () => {

    useEffect(()=>{
        if(localStorage.getItem("cart")==null)
        {
         localStorage.setItem("cart","[]")
        }
    },[])
   
    let{data,pending,error}=useFetch("http://localhost:4000/products")

    return ( 
    <div>
          
     <Navbar/>
     <NavbarSecond/>
     <Carousel/>
        {data==true && <h1>loading....................</h1>}
   {data!=null &&     <DisplayProducts data={data} title="All Products"/>}
    </div>
        );
}
 
export default Home;
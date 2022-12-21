import React from "react";
import useFetch from "./useFetch";
import {Link} from "react-router-dom"

const Admin = () => {
    let{data:products,error,pending}=useFetch("http://localhost:4000/products")

    let handleDelete=(id)=>{
       fetch(`http://localhost:4000/products/${id}`
       ,{method:"DELETE"})
       .then(()=>{
        alert("items deleted successfully")
        window.location.reload()
       }
       )
    }

    return (
        <div>
            <h1>ADMIN PAGE</h1>
            <hr />
          { products && <table border={"4px"}>
                <thead>
                    <th>Sl.No</th>
                    <th>Products</th>
                    <th>product type</th>
                    <th colSpan={"2"}>Action</th>
                </thead>
                <tbody>
                    {
                        products.map((items,i)=>{
                             return(
                                <tr>
                                    <td>{i+1}</td>
                                    <td><img src={items.productPic} width={"50px"} height={"50px"} /></td>
                                    <td>{items.productType}</td>
                                    <td><Link to={`/update${items.id}`}><button>Edit</button></Link></td>
                                    <td><button onClick={()=>{handleDelete(items.id)}}>Delete</button></td>
                                </tr>
                             )
                        })
                    }
                </tbody>
            </table>}
            <Link to="/addnewproduct"><button>add new product</button></Link>
        </div>
      );
}
 
export default Admin;
import React from "react";
import { Link } from "react-router-dom";

const DisplayProducts = ({ data }) => {
  return (
    <div className="setproducts">
      {data.map((data) => {
        return (
          <Link to={`/productsDetails${data.id}`} className="Products">
            <img src={data.productPic} alt="" />
            <p>{data.brand}</p>
            <div className="price">
              <p>{data.discountprise}</p>
              <p>{data.mrp}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default DisplayProducts;

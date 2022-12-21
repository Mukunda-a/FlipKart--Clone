import { useRef } from "react";
const Addproduct = () => {
  let pic = useRef();
  let brand = useRef();
  let desc = useRef();
  let dprice = useRef();
  let mrp = useRef();
  let color = useRef();
  let fabric = useRef();
  let type = useRef();
  let rate = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();

    let newProduct = {
      productPic: pic.current.value,
      brand: brand.current.value,
      description: desc.current.value,
      discountprice: dprice.current.value,
      mrp: mrp.current.value,
      color: color.current.value,
      fabric: fabric.current.value,
      productType: type.current.value,
      usage: "",
      rating: rate.current.value,
      size: [],
    };
    // console.log(newProduct);
    fetch("http://localhost:4000/products",
    {method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(newProduct)}
    )
  };
  return (
    <div className="add-product">
      <h1>ADD PRODUCTS</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Picture</label>
        <input type="url" ref={pic} />

        <label>Brand</label>
        <input type="text" ref={brand} />

        <label>Description</label>
        <textarea cols="30" rows="10" ref={desc}></textarea>

        <label>Discount price</label>
        <input type="number" ref={dprice} />

        <label>mrp</label>
        <input type="number" ref={mrp} />

        <label>color</label>
        <input type="text" ref={color} />

        <label>fabric</label>
        <input type="text" ref={fabric} />

        <label>Product type</label>
        <input type="text" ref={type} />

        <label>usuage</label>
        <div>
          <input type="radio" name="gender" />
          <label>Male</label>
          <input type="radio" name="gender" />
          <label>female</label>
          <input type="radio" name="gender" />
          <label>unisex</label>
        </div>

        <label>Ratings</label>
        <input type="number" min={1} max={5} step={0.1} ref={rate} />

        <label>Size</label>
        <div>
          <input type="checkbox" name="size" />
          <label>S</label>
          <input type="checkbox" name="size" />
          <label>M</label>
          <input type="checkbox" name="size" />
          <label>X</label>
          <input type="checkbox" name="size" />
          <label>XL</label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Addproduct;

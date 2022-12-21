import React from "react";

const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/1176cec8a9974c97.jpg?q=50" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/e9ae9c998f723120.jpg?q=50" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2108ab9927af795b.jpg?q=50" className="d-block w-100" alt="..."/>
          </div>
         
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    );
}
 
export default Carousel;
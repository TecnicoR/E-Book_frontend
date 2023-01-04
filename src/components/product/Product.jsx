import React, { useEffect } from "react";
import "./product.css";
import ReactStars from "react-rating-stars-component";


function Product({prop}) {
  document.title = "All Products"
  return (
    <div className="product">
      <div className="image">
        <img src={prop?.imageUrl} height="150px" alt="Image" />
      </div>
      <ReactStars
        count={5}
        size={24}
        value={4}
        activeColor="#0000FF"
        edit={false}
        classNames="ratings"
      />
      <h3 className="book-name">{prop?.name}</h3>
      <div className="price-section">
        <h6 className="price">{prop?.price}</h6>
        <img src="assets/icons/rupee-indian.png" alt="" />
      </div>
      <div className="actions">
        <img src="assets/icons/buy.png" alt="Buy Now" />
        <img src="assets/icons/add-to-cart.png" alt="Add to cart" />
      </div>
    </div>
    // <div className="product">
    //   <div className="image">
    //     <img src="assets/images/book-image.jpg" height="150px" alt="Image" />
    //   </div>
    //   <ReactStars
    //     count={5}
    //     size={24}
    //     value={4}
    //     activeColor="#0000FF"
    //     edit={false}
    //     classNames="ratings"
    //   />
    //   <h3 className="book-name">Psychology of Money</h3>
    //   <div className="price-section">
    //     <h6 className="price">2567.00</h6>
    //     <img src="assets/icons/rupee-indian.png" alt="" />
    //   </div>
    //   <div className="actions">
    //     <img src="assets/icons/buy.png" alt="Buy Now" />
    //     <img src="assets/icons/add-to-cart.png" alt="Add to cart" />
    //   </div>
    // </div>
  );
}

export default Product;

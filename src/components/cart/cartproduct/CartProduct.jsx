import React from "react";
import "./cartproduct.css";
import ReactStars from "react-rating-stars-component";

function CartProduct() {
  return (
    <div className="cart-product">
      <div className="image">
        <img src="assets/images/book-image.jpg" alt="" />
      </div>
      <div className="name">
        <h3>Physhdsd</h3>
        <ReactStars
          count={5}
          size={24}
          value={4}
          activeColor="#0000FF"
          edit={false}
          classNames="ratings"
        />
      </div>
      <div className="price">
        <h3>12676</h3>
        <img src="assets/icons/rupee-indian.png" alt="" height="20px" />
      </div>
      <div className="action">
        <img src="assets/icons/delete.png" alt="" />
      </div>
    </div>
  );
}

export default CartProduct;

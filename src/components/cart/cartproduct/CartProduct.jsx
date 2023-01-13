import React from "react";
import "./cartproduct.css";
import ReactStars from "react-rating-stars-component";

function CartProduct({product}) {
  return (
    <div key={product?.id} className="cart-product">
      <div className="image">
        <img src={product?.imageUrl} alt="" />
      </div>
      <div className="name">
        <h3>{product?.name}</h3>
        <ReactStars
          count={5}
          size={24}
          value={product?.averageRatings}
          activeColor="#0000FF"
          edit={false}
          classNames="ratings"
        />
      </div>
      <div className="price">
        <h3>{product?.price}</h3>
        <img src="assets/icons/rupee-indian.png" alt="" height="20px" />
      </div>
      <div className="action">
        <img src="assets/icons/delete.png" alt="" />
      </div>
    </div>
  );
}

export default CartProduct;

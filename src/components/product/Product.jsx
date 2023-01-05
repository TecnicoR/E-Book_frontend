import React, { useEffect } from "react";
import "./product.css";
import ReactStars from "react-rating-stars-component";


function Product({product}) {
  document.title = "All Products"
  return (
    <div key={product?.id} className="product">
      <div className="image">
        <img src={product?.imageUrl} height="150px" alt="Image" />
      </div>
      <ReactStars
        count={5}
        size={24}
        value={4}
        activeColor="#0000FF"
        edit={false}
        classNames="ratings"
      />
      <h3 className="book-name">{product?.name}</h3>
      <div className="price-section">
        <h6 className="price">{product?.price}</h6>
        <img src="assets/icons/rupee-indian.png" alt="rupees" />
      </div>
      <div className="actions">
        <img src="assets/icons/buy.png" alt="Buy Now" />
        <img src="assets/icons/add-to-cart.png" alt="Add to cart" />
      </div>
    </div>
  );
}

export default Product;

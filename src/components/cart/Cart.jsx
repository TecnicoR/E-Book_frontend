import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getCartByUserId } from "../../services/ProductService";
import Product from "../product/Product";
import "./cart.css";
import CartProduct from "./cartproduct/CartProduct";

function Cart() {
  const [cart, setCart] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getCartByUserId(localStorage.getItem("userId"))
      .then((res) => {
        setCart(res);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  document.title = "Cart";
  return (
    // <>
      <div className="cart">
        <div className="cart-products">
          {cart?.products?.length > 0 ? (
            cart?.products?.map((item, key) => (
              <CartProduct product={item}/>
            ))
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
    // </>
  );
}

export default Cart;

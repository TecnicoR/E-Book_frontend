import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getCartByUserId,
  removeProductFromCart,
} from "../../services/ProductService";
import Product from "../product/Product";
import "./cart.css";
import CartProduct from "./cartproduct/CartProduct";

function Cart() {
  document.title = "Cart";
  const [cart, setCart] = useState({});
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      toast.info("Please login to see your cart");
      navigate("/login");
    } else {
      setLoader(true);
      getCartByUserId(localStorage.getItem("userId"))
        .then((res) => {
          setCart(res);
          if (!res?.products?.length > 0) {
            toast.info("Nothing in cart, add some to view");
            navigate("/");
          }
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  }, []);

  function removeFromCart(productId) {
    if (!localStorage.getItem("auth")) {
      toast.info("Please Login First");
      // navigate("/login")
    } else
      removeProductFromCart(localStorage.getItem("userId"), productId)
        .then((res) => {
          toast.success("Product removed successfully");
          setCart(res);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
  }

  return (
    // <>
    <div className="cart">
      <div className="cart-products">
        {cart?.products?.length > 0 ? (
          cart?.products?.map((item, key) => (
            <CartProduct
              product={item}
              removeFromCart={() => removeFromCart(item?.id)}
            />
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

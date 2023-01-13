import React from "react";
import { toast } from "react-toastify";
import {
  addProductToCart,
  getAllProducts,
} from "../../services/ProductService";
import Product from "../product/Product";
import "./products.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  document.title = "All Products"
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        console.log("res",res)
        setProducts(res);
      })
      .catch((err) => {
        // toast.error("Something Wrong");
      });
  }, []);

  function addToCart(id) {
    if (!localStorage.getItem("auth")) {
      toast.info("Please Login First");
      navigate("/login")
    }
    else
      addProductToCart(localStorage.getItem("userId"), id)
        .then((res) => {
          toast.success("Product added successfully");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
  }
  return (
    <div className="products">
      
      {
      products?.length>0 ? products?.map((item, key) => 
        <Product product={item} addToCart={() => addToCart(item?.id)} />
      )
      : <div>No data available</div>
      }
    </div>
  );
}

export default Products;

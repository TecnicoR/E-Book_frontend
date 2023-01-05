import React from "react";
import { toast } from "react-toastify";
import { getAllProducts } from "../../services/ProductService";
import Product from "../product/Product";
import "./products.css";
import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        toast.error("Something Wrong");
      });
  }, []);

  return (
    <div className="products">
      {products?.map((item, key) => (
        <Product product={item} />
      ))}
    </div>
  );
}

export default Products;

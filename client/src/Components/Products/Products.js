import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
function Products() {
  const products = useSelector((state) => state.products);
  return (
    <div className="main-products">
      <section className="products">
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </section>
    </div>
  );
}

export default Products;

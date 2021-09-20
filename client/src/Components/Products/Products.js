import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

function Products({ productId, setProductId }) {
  const products = useSelector((state) => state.products);

  return (
    <div className="main-products">
      {products.length === 0 ? (
        <div className="loader">
          <Loader type="Oval" color="grey" height={40} width={40} />
        </div>
      ) : (
        <section className="products">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              productId={productId}
              setProductId={setProductId}
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default Products;

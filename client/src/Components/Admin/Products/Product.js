import React, { useState } from "react";

function Product({ product }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="admin-product"
      onMouseLeave={() => {
        setToggle(!toggle);
      }}
      onMouseEnter={() => setToggle(!toggle)}
    >
      <section className="img">
        <img src={product?.imageUrl} alt="" />
        {toggle && (
          <section className="admin-product-info">
            <p className="admin-title">
              {product?.title} <span>₹{product?.price}</span>
            </p>
            <p className="admin-product-specification">
              {product?.specification}
            </p>
          </section>
        )}
        <section
          className={product?.inStock ? "status" : "status red"}
        ></section>
      </section>
      <h4 className="product-id">ID:{product._id}</h4>
    </div>
  );
}

export default Product;

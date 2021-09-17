import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Product({ product, productId, setProductId }) {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  const navigateProduct = () => {
    setProductId(product?._id);

    history.push(`/admin/products/create/${product?._id}`);
  };
  return (
    <div
      className="admin-product"
      onClick={navigateProduct}
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

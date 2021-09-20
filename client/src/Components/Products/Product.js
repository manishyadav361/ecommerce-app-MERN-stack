import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./styles.css";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

function Product({ product, setProductId }) {
  const history = useHistory();
  const productRoute = () => {
    console.log(product._id);
    history.push(`/product/${product._id}`);
  };

  return (
    <div className="main-product" onClick={productRoute}>
      <section className="image">
        <img src={product?.imageUrl} alt="" />
      </section>
      <section className="title">
        <p>{product.title}</p>
        <FavoriteBorderIcon />
      </section>
      <section className="price">
        <b>₹{product.price}</b>
      </section>
      <section className="cart-btn">
        <Button
          color="primary"
          variant="contained"
          className="main-product-btn"
        >
          Add to cart
        </Button>
      </section>
    </div>
  );
}

export default Product;

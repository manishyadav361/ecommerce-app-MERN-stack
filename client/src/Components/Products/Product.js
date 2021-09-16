import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./styles.css";
import { Button } from "@material-ui/core";
function Product({ product }) {
  return (
    <div className="main-product">
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
        <Button color="primary" variant="contained">
          Add to cart
        </Button>
      </section>
    </div>
  );
}

export default Product;

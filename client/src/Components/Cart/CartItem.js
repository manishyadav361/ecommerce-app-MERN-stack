import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Button, IconButton } from "@material-ui/core";
import Loader from "react-loader-spinner";
function CartItem({ product }) {
  const products = useSelector((state) =>
    state.products.filter((item) => product && item._id === product.productId)
  );
  const cartItem = products[0];

  return (
    <>
      {cartItem ? (
        <div className="cart-item">
          <section className="cart-image">
            <img src={cartItem?.imageUrl} alt="" />
          </section>
          <section className="cart-info">
            <section className="title-cart">
              <h4>{cartItem?.title}</h4>
              <FavoriteBorderIcon color="secondary" />
            </section>
            <section className="cart-price">
              ₹ <span>{cartItem?.price}</span>
            </section>
            <section className="cart-quantity">
              <IndeterminateCheckBoxIcon />
              <p>{product?.quantity}</p>
              <AddBoxIcon />
            </section>
            <section className="cart-remove">
              <Button variant="outlined" size="small" color="secondary">
                Remove from Cart
              </Button>
            </section>
          </section>
        </div>
      ) : (
        <div className="cart-item">
          <div className="load">
            <Loader type="Oval" color="grey" height={40} width={40} />
          </div>
        </div>
      )}
    </>
  );
}

export default CartItem;

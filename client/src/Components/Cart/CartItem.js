import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Button } from "@material-ui/core";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";
import {
  decrementQuantity,
  removeCartProduct,
  updateQuantity,
} from "../../Actions/Cart";
import { getCart } from "../../Actions/Cart";

function CartItem({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    state.products.filter((item) => product && item._id === product.productId)
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id ? user?.result?._id : user?.result?.googleId;
  const cartItem = products[0];

  const removeCartItem = (e) => {
    dispatch(removeCartProduct(product?.productId, userId));
  };
  const increment = () => {
    dispatch(updateQuantity(product?.productId, userId, cartItem?.price));
  };
  const decrement = () => {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product?.productId, userId, cartItem?.price));
    }
  };

  return (
    <>
      {cartItem ? (
        <div className="cart-item" key={product.productId}>
          <section
            className="cart-image"
            onClick={() => history.push(`/product/${product?.productId}`)}
          >
            <img src={cartItem?.imageUrl} alt="" />
          </section>
          <section className="cart-info">
            <section className="title-cart">
              <h4>{cartItem?.title}</h4>
              <FavoriteBorderIcon color="secondary" />
            </section>
            <section className="cart-price">
              ₹ <span>{product?.total}</span>
            </section>
            <section className="cart-quantity">
              <Button
                color="primary"
                variant="text"
                size="small"
                disabled={product.quantity === 1 && true}
                onClick={decrement}
                startIcon={<IndeterminateCheckBoxIcon />}
              ></Button>
              <p>{product?.quantity}</p>
              <Button
                color="primary"
                variant="text"
                size="small"
                onClick={increment}
                startIcon={<AddBoxIcon />}
              ></Button>
            </section>
            <section className="cart-remove">
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={removeCartItem}
              >
                Remove from Cart
              </Button>
            </section>
          </section>
        </div>
      ) : (
        <div className="cart-item">
          <div className="load">
            <Loader type="Oval" color="grey" height={20} width={20} />
          </div>
        </div>
      )}
    </>
  );
}

export default CartItem;

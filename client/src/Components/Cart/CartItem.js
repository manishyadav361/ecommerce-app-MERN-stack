import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Button, IconButton } from "@material-ui/core";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";
import { removeCartProduct } from "../../Actions/Cart";

function CartItem({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    state.products.filter((item) => product && item._id === product.productId)
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id ? user?.result?._id : user?.result?.googleId;
  const cartItem = products[0];

  const removeCartItem = () => {
    dispatch(removeCartProduct(product?.productId, userId));
  };

  return (
    <>
      {cartItem ? (
        <div className="cart-item">
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
              ₹ <span>{cartItem?.price}</span>
            </section>
            <section className="cart-quantity">
              <IndeterminateCheckBoxIcon />
              <p>{product?.quantity}</p>
              <AddBoxIcon />
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
            <Loader type="Oval" color="grey" height={40} width={40} />
          </div>
        </div>
      )}
    </>
  );
}

export default CartItem;

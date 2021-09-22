import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./styles.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCart } from "../../Actions/Cart";
import { updateCart } from "../../Actions/Cart";
function Product({ product, setProductId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart?.products);
  const productRoute = () => {
    history.push(`/product/${product._id}`);
  };
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id ? user?.result?._id : user?.result?.googleId;
  const handleCart = () => {
    if (!cart) {
      dispatch(createCart(product?._id, 1, userId));
    } else {
      dispatch(updateCart(product?._id, 1, userId));
    }
  };

  // const addItemCart = () => {
  //   if (cart) {
  //   }
  // };

  return (
    <div className="main-product">
      <section className="image" onClick={productRoute}>
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
          onClick={handleCart}
        >
          Add to cart
        </Button>
      </section>
    </div>
  );
}

export default Product;

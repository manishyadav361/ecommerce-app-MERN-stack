import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./styles.css";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCart } from "../../Actions/Cart";
function Product({ product, setProductId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);

  const productRoute = () => {
    console.log(product._id);
    history.push(`/product/${product._id}`);
  };
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id ? user?.result?._id : user?.result?.googleId;
  const handleCart = () => {
    if (cart.length === 0) {
      dispatch(createCart(product?._id, 1, userId));
    } else {
      alert("cart is present");
    }
  };

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
          onClick={cart && handleCart}
        >
          Add to cart
        </Button>
      </section>
    </div>
  );
}

export default Product;

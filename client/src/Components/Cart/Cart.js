import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../Actions/Cart";
import CartItem from "./CartItem";
import Navbar from "../../Components/Navbar/Navbar";
import Loader from "react-loader-spinner";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id ? user?.result?._id : user?.result?.googleId;

  useEffect(() => {
    dispatch(getCart(userId));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {cart.products ? (
        <div>
          {cart?.products?.map((product) => (
            <CartItem product={product} key={product.productId} />
          ))}
        </div>
      ) : (
        <div className="loader">
          <Loader type="Oval" color="grey" height={40} width={40} />
        </div>
      )}
    </>
  );
}

export default Cart;

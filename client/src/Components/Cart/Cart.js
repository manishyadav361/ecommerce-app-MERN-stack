import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../Actions/Cart";
import CartItem from "./CartItem";
import Navbar from "../../Components/Navbar/Navbar";
import { useHistory } from "react-router";
function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state.cart);
  const cart = state.cart;
  const [total, SetTotal] = useState(0);
  const cartTotal = (cart) =>
    SetTotal(cart?.products?.reduce((acc, curr) => acc + curr?.total, 0));
  useEffect(() => {
    cartTotal(cart);
  }, [dispatch, cart]);

  return (
    <div className="cart-section">
      <Navbar />
      {state?.cart?.products ? (
        <div className="cart-main">
          <div className="cart">
            {cart?.products?.map((product) => (
              <CartItem product={product} key={product?.productId} />
            ))}
          </div>
          <div className="cart-total">
            <section className="cart-total-box">
              <h3>Your Shopping Cart</h3>
              <section className="cart-details">
                <p className="cart-total-items">
                  Total Items: <span>{cart?.products?.length}</span>
                </p>
                <p className="cart-total-price">
                  Total Price:₹ <b>{total && total}</b>
                </p>
              </section>
              <section className="checkout-btn">
                <button onClick={() => history.push("/checkout")}>
                  Proceed to checkout
                </button>
              </section>
            </section>
          </div>
        </div>
      ) : (
        <div className="loader">
          {/* <Loader type="Oval" color="grey" height={40} width={40} /> */}
        </div>
      )}
    </div>
  );
}

export default Cart;

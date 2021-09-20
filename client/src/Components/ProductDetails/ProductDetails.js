import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./styles.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Loader from "react-loader-spinner";
import { Button } from "@material-ui/core";
function ProductInfo({ match }) {
  const data = useSelector((state) =>
    state.products.filter((product) => product._id === match)
  );

  return (
    <>
      <Navbar />
      {data[0] ? (
        <div className="product-main-detail">
          <section className="img-detail">
            <img src={data[0]?.imageUrl} alt="" width="200px" />
          </section>
          <section className="product-detail">
            <span className="detail-title">
              <h3>{data[0]?.title}</h3>
              <FavoriteBorderIcon className="like-icon" />
            </span>
            <span className="detail-price">
              <b>₹ {data[0]?.price}</b>
            </span>
            <span className="stock">
              <div></div>In Stock
            </span>
            <span className="shipping-detail">
              <h3>Shipping Cost:</h3>
              <b>
                {data[0]?.freeShipping
                  ? "Free Shipping"
                  : `₹ ${data[0]?.shippingCharges}`}
              </b>
            </span>
            <span className="detail-specification">
              <h3>Description</h3>
              <div>{data[0]?.specification}</div>
            </span>
            <span className="detail-btn">
              <Button size="large" color="primary" variant="contained">
                Add to Cart
              </Button>
            </span>
          </section>
        </div>
      ) : (
        <div className="loader">
          <Loader type="Oval" color="grey" height={40} width={40} />
        </div>
      )}
    </>
  );
}

export default ProductInfo;

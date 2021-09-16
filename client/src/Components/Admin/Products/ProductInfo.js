import "./productInfo.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import ImageIcon from "@material-ui/icons/Image";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../Actions/Products";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
function ProductInfo() {
  const initialState = {
    title: "",
    category: "",
    inStock: false,
    freeShipping: false,
    discountedPrice: 0,
    price: 0,
    specification: "",
    ratings: 0,
    keyword: "",
    imageUrl: "",
    shippingCharges: 0,
  };
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user?.result?._id || user?.result?.googleId;
  const dispatch = useDispatch();
  const [product, setProduct] = useState(initialState);
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value.toLowerCase() });
  };
  const clearInput = () => {
    setProduct(initialState);
  };
  const dispatchProduct = () => {
    if (user) {
      dispatch(createProduct(product, id, history));
      clearInput();
    } else {
      alert("Login to your account");
      history.push("/auth");
    }
  };

  return (
    <>
      <Header />
      <form className="product-info">
        <div className="info-left">
          <h4>Category</h4>
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            required
            value={product.category}
          />
          <h4>Title</h4>
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            onChange={handleChange}
          />
          <h4>Price</h4>
          <input
            placeholder="Price"
            type="number"
            min={0}
            name="price"
            value={product?.price}
            required
            onChange={handleChange}
          />
          <h4>Discounted Price</h4>
          <input
            placeholder="Discounted Price"
            type="number"
            min={0}
            name="discountedPrice"
            value={product.discountedPrice}
            required
            onChange={handleChange}
          />
          <h4>Keyword</h4>
          <input
            type="text"
            name="keyword"
            placeholder="Keyword"
            value={product.keyword}
            onChange={handleChange}
          />
          <h4> Specification</h4>

          <input
            type="text"
            name="specification"
            placeholder="Specification"
            value={product.specification}
            onChange={handleChange}
          />
          <h4> Shipping Charges</h4>
          <input
            name="shippingCharges"
            type="number"
            placeholder="Shipping Charges"
            value={product.shippingCharges}
            onChange={handleChange}
            min={0}
          />
          <div className="btn">
            <Button
              color={"secondary"}
              onClick={() =>
                setProduct({ ...product, inStock: !product.inStock })
              }
              className={!product?.inStock ? "button" : "button active"}
              variant="contained"
            >
              {" "}
              In Stock
            </Button>
            <Button
              color="secondary"
              className={!product?.freeShipping ? "button" : "button active"}
              variant="contained"
              onClick={() =>
                setProduct({ ...product, freeShipping: !product.freeShipping })
              }
            >
              Free Shipping
            </Button>
          </div>
        </div>
        <div className="info-right">
          <div className="image-container">
            {product?.imageUrl ? <img src={product.imageUrl} /> : <ImageIcon />}
          </div>
          <FileBase
            type="file"
            multiple={false}
            value={product.imageUrl}
            onDone={({ base64 }) =>
              setProduct({ ...product, imageUrl: base64 })
            }
          />
          <div className="btn">
            <Button
              variant="contained"
              className="cancel-btn"
              onClick={clearInput}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className="add-btn"
              onClick={dispatchProduct}
            >
              Add
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProductInfo;

import "./productInfo.css";
import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import FileBase from "react-file-base64";
import ImageIcon from "@material-ui/icons/Image";
import { useDispatch } from "react-redux";
import {
  createProduct,
  deleteItem,
  updateItem,
} from "../../../Actions/Products";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import DeleteIcon from "@material-ui/icons/Delete";

function ProductInfo({ productId, setProductId }) {
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
  let [loading, setLoading] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user?.result?._id || user?.result?.googleId;
  const dispatch = useDispatch();

  const [product, setProduct] = useState(initialState);
  const updateProduct = useSelector((state) =>
    productId
      ? state?.products.find((product) => product?._id === productId)
      : null
  );

  useEffect(() => {
    if (productId) {
      setProduct(updateProduct);
    } else {
      setProduct(initialState);
    }
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const clearInput = () => {
    setProduct(initialState);
  };
  const dispatchProduct = () => {
    setLoading(!loading);
    if (user && !updateProduct) {
      dispatch(createProduct(product, id, history));
      clearInput();
    } else {
      dispatch(updateItem(product, productId, history));
      setLoading(!loading);
      setProductId(null);
      clearInput();
    }
  };
  const deleteHandler = () => {
    setLoading(!loading);
    dispatch(deleteItem(productId, history));
    setLoading(!loading);
  };
  return (
    <div className="admin-form">
      {loading && (
        <div className="loading">
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        </div>
      )}
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
            value={product?.title}
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
          {productId && (
            <div className="delete-admin-product">
              <IconButton color="secondary" onClick={deleteHandler}>
                <DeleteIcon color="secondary" />
              </IconButton>
            </div>
          )}
          <div className="image-container">
            {product?.imageUrl ? (
              <img src={product.imageUrl} alt="" />
            ) : (
              <ImageIcon />
            )}
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
            {!productId && (
              <Button
                variant="contained"
                className="cancel-btn"
                onClick={clearInput}
              >
                Cancel
              </Button>
            )}
            {updateProduct ? (
              <Button
                variant="contained"
                className="add-btn"
                onClick={dispatchProduct}
              >
                Update
              </Button>
            ) : (
              <Button
                variant="contained"
                className="add-btn"
                onClick={dispatchProduct}
              >
                Add
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductInfo;

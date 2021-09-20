import React, { useEffect, useState } from "react";
import "./styles.css";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import Product from "./Product";

function Products({ productId, setProductId }) {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const isCustomAuth = user?.token?.length < 500;
  const [adminProducts, setAdminProducts] = useState([]);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    setAdminProducts(
      products?.filter(
        (product) =>
          product?.creator ===
          (isCustomAuth ? user?.result?._id : user?.result?.googleId)
      )
    );
  }, [products]);

  return (
    <>
      <Header />
      <div className="admin-products ">
        {/* {loading && (
          <div className="loader">
            <Loader type="Oval" color="#00BFFF" height={80} width={80} />
          </div>
        )} */}
        <div
          className="add-product"
          onClick={() => history.push("/admin/products/create")}
        >
          <AddIcon className="admin-add" />
        </div>
        <div className="products-admin">
          {adminProducts.map((product) => (
            <Product
              productId={productId}
              setProductId={setProductId}
              product={product}
              key={product._id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;

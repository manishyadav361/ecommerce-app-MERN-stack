import React from "react";
import "./styles.css";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
function Products() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const isCustomAuth = user?.token?.length < 500;
  const products = useSelector((state) =>
    state.products.filter(
      (product) =>
        product?.creator ===
        (isCustomAuth ? user?.result?._id : user?.result?.googleId)
    )
  );
  console.log(products);
  return (
    <>
      <Header />
      <div className="admin-products ">
        <div
          className="add-product"
          onClick={() => history.push("/admin/products/create")}
        >
          <AddIcon className="admin-add" />
        </div>
      </div>
    </>
  );
}

export default Products;

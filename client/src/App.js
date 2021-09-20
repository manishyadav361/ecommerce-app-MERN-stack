import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./Components//Auth/Auth";
import Profile from "./Components/Profile/Profile";
import Admin from "./Components/Admin/Admin";
import Products from "./Components/Products/Products";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./Actions/Products";
import AdminProducts from "./Components/Admin/Products/AdminProducts";
import ProductInfo from "./Components/Admin/Products/ProductInfo";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Header from "./Components/Admin/Header/Header";

function App() {
  const dispatch = useDispatch();
  const [productId, setProductId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Products
              productId={productId}
              setProductId={setProductId}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>

          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route
            path="/product/:id"
            exact
            component={(props) => (
              <ProductDetails match={props.match.params.id} />
            )}
          />

          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/admin/products" exact>
            <AdminProducts productId={productId} setProductId={setProductId} />
          </Route>
          <Route path="/admin/products/create">
            <ProductInfo productId={productId} setProductId={setProductId} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

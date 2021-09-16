import React, { useEffect } from "react";
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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Products />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/admin/products" exact>
            <AdminProducts />
          </Route>
          <Route path="/admin/products/create">
            <ProductInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

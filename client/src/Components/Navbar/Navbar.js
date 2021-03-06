import React, { useEffect, useState } from "react";

import { Avatar, Button, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import StorefrontIcon from "@material-ui/icons/Storefront";

import AssignmentIcon from "@material-ui/icons/Assignment";
import { getCart } from "../../Actions/Cart";

function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((state) => state?.cart);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const userId = user?.result?._id ? user?.result?._id : user?.result?.googleId;

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    history.push("/auth");
    setUser(null);
  };
  // useEffect(() => dispatch(getCart(userId)), [dispatch]);
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <section className="navbar">
        <div className="nav-left">
          {!toggle ? (
            <MenuIcon
              color="primary"
              className="menu"
              onMouseEnter={handleToggle}
              onClick={handleToggle}
            />
          ) : (
            <CloseIcon
              color="primary"
              className="menu"
              onMouseEnter={handleToggle}
              onClick={handleToggle}
            />
          )}
          <Typography
            variant="h6"
            color="primary"
            className="nav-logo"
            onClick={() => history.push("/")}
          >
            MANIAC'S
          </Typography>
          <section className="cart-icon-mobile">
            <Button
              size="small"
              color="primary"
              startIcon={<ShoppingCartIcon />}
              onClick={() => history.push("/cart")}
            >
              <span className="cart-count">{cart?.cart?.products?.length}</span>
            </Button>
          </section>
        </div>
        <div className="nav-center">
          <input type="text" name="" placeholder="Search" />
          <SearchIcon color="primary" />
        </div>
        <div className="nav-right">
          {user && (
            <section className="cart-icon">
              <Button
                size="small"
                color="primary"
                startIcon={<ShoppingCartIcon />}
                onClick={() => history.push("/cart")}
              >
                <span className="cart-count">
                  {cart?.cart?.products?.length}
                </span>
              </Button>
            </section>
          )}
          {user && (
            <Avatar
              src={user?.result?.imageUrl}
              className="nav-avatar"
              onClick={() => history.push("/profile")}
            ></Avatar>
          )}
          <Typography color="primary" className="username">
            {user?.result?.name}
          </Typography>
          {user ? (
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={handleLogout}
              className="submit-btn"
            >
              Logout
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={() => history.push("/auth")}
              className="submit-btn"
            >
              Login
            </Button>
          )}
        </div>
      </section>
      <section className={toggle ? "nav-links show" : "nav-links hide"}>
        <section className="sidebar-profile">
          <Avatar
            src={user?.result?.imageUrl}
            className="nav-avatar"
            onClick={() => history.push("/profile")}
          ></Avatar>

          <Typography color="primary" className="username">
            {user?.result?.name}
          </Typography>
        </section>
        <span
          className="link"
          onClick={() => {
            history.push("/");
            handleToggle();
          }}
        >
          <Typography color="primary" className="text">
            Home
          </Typography>
          <HomeIcon color="primary" />
        </span>
        <span
          className="link"
          onClick={() => {
            handleToggle();
            history.push("/products");
          }}
        >
          <Typography color="primary" className="text">
            Product's
          </Typography>
          <StorefrontIcon color="primary" />
        </span>
        <span
          className="link"
          onClick={() => {
            handleToggle();

            history.push("/cart");
          }}
        >
          <Typography color="primary" className="text">
            Cart
          </Typography>
          <ShoppingCartIcon color="primary" />
        </span>
        <span
          className="link"
          onClick={() => {
            handleToggle();
            history.push("/orders");
          }}
        >
          <Typography color="primary" className="text">
            Order's
          </Typography>
          <AssignmentIcon color="primary" />
        </span>
        <span
          className="link"
          onClick={() => {
            handleToggle();
            history.push("/admin");
          }}
        >
          <Typography color="primary" className="text">
            Admin login
          </Typography>
          <PersonIcon color="primary" />
        </span>
        <div className="sidebar-profile">
          {user ? (
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={handleLogout}
              className="submit-btn"
            >
              Logout
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={() => history.push("/auth")}
              className="submit-btn"
            >
              Login
            </Button>
          )}
        </div>
      </section>
    </header>
  );
}

export default Navbar;

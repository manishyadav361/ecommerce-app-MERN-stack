import React, { useEffect, useState } from "react";

import { Avatar, Button, IconButton, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AssignmentIcon from "@material-ui/icons/Assignment";
function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [toggle, setToggle] = useState(false);

  const handleLogout = (e) => {
    if (user?.result) {
      dispatch({ type: "LOGOUT" });
      history.push("/");
      setUser(null);
    }
  };
  const location = useLocation();

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
          <Typography variant="h6" color="primary" className="nav-logo">
            MANIAC'S
          </Typography>
        </div>
        <div className="nav-center">
          <input type="text" name="" placeholder="Search" />
          <SearchIcon color="primary" />
        </div>
        <div className="nav-right">
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
        <span className="link" onClick={() => history.push("/")}>
          <Typography color="primary" className="text">
            HOME
          </Typography>
          <HomeIcon color="primary" />
        </span>
        <span className="link" onClick={() => history.push("/profile")}>
          <Typography color="primary" className="text">
            PROFILE
          </Typography>
          <PersonIcon color="primary" />
        </span>
        <span className="link" onClick={() => history.push("/products")}>
          <Typography color="primary" className="text">
            PRODUCT'S
          </Typography>
          <StorefrontIcon color="primary" />
        </span>
        <span className="link" onClick={() => history.push("/cart")}>
          <Typography color="primary" className="text">
            CART
          </Typography>
          <ShoppingCartIcon color="primary" />
        </span>
        <span className="link" onClick={() => history.push("/orders")}>
          <Typography color="primary" className="text">
            ORDER'S
          </Typography>
          <AssignmentIcon color="primary" />
        </span>
      </section>
    </header>
  );
}

export default Navbar;

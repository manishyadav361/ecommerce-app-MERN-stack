import React, { useEffect, useState } from "react";

import { Avatar, Button, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

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

  return (
    <div className="navbar">
      <div className="nav-left">
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
    </div>
  );
}

export default Navbar;

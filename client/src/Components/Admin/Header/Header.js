import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Typography } from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { useHistory } from "react-router-dom";
import "./styles.css";

function Header() {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const SideBar = () => {
    return (
      <div className={toggle ? "sidebar show" : "sidebar hide-sidebar "}>
        <section
          className="link"
          onClick={() => {
            history.push("/admin/products");
            setToggle(false);
          }}
        >
          <Typography className="text" color="primary">
            Products
          </Typography>
          <StorefrontIcon color="primary" />
        </section>
      </div>
    );
  };
  return (
    <header className="admin-header">
      <div className="main-section">
        <section className="burger">
          {!toggle ? (
            <MenuIcon
              color="primary"
              onMouseEnter={handleToggle}
              onClick={handleToggle}
            />
          ) : (
            <CloseIcon
              color="primary"
              onMouseEnter={handleToggle}
              onClick={handleToggle}
            />
          )}
        </section>
        <section className="heading">
          <Typography
            color="primary"
            variant="h6"
            className="header-head"
            onClick={() => history.push("/admin")}
          >
            MANIAC'S
          </Typography>
        </section>
        <section className="header-right">
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/")}
          >
            Go To Store
          </Button>
        </section>
      </div>
      <div className="admin-sidebar">
        <SideBar />
      </div>
    </header>
  );
}

export default Header;

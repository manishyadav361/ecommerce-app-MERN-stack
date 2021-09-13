import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signIn, signUp } from "../../Actions/auth";
import "./styles.css";

function Auth() {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const [signup, setSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const changeAuth = () => {
    setSignUp(!signup);
    setFormData(initialState);
  };

  const handleFormInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (signup) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };

  return (
    <div className="auth">
      <form action="" onSubmit={handleAuth}>
        {signup && (
          <input
            type="text"
            name="firstname"
            onChange={handleFormInput}
            placeholder="FirstName"
            value={formData.firstname}
          />
        )}

        {signup && (
          <input
            type="text"
            name="lastname"
            onChange={handleFormInput}
            placeholder="LastName"
            value={formData.lastname}
          />
        )}

        <input
          type="text"
          name="email"
          onChange={handleFormInput}
          placeholder="email"
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleFormInput}
          placeholder="Password"
          value={formData.password}
        />
        {signup && (
          <input
            type="password"
            name="confirmpassword"
            placeholder="Re-enter Password"
            onChange={handleFormInput}
            value={formData.confirmpassword}
          />
        )}

        {signup ? (
          <Button
            color="primary"
            variant="contained"
            onClick={handleAuth}
            size="small"
            className="form-btn"
            type="submit"
          >
            Sign Up
          </Button>
        ) : (
          <Button
            color="primary"
            variant="contained"
            onClick={handleAuth}
            className="form-btn"
            type="submit"
          >
            Sign In
          </Button>
        )}
        {signup ? (
          <Typography
            variant="h6"
            align="center"
            color="primary"
            onClick={changeAuth}
            className="check"
          >
            Already have an account? Sign In
          </Typography>
        ) : (
          <Typography
            variant="h6"
            color="primary"
            align="center"
            onClick={changeAuth}
            className="check"
          >
            Dont have an account? Sign Up
          </Typography>
        )}
      </form>
    </div>
  );
}

export default Auth;

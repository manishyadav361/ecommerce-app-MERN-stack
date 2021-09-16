import { Button, Icon, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signIn, signUp } from "../../Actions/auth";
import "./styles.css";
import GoogleLogin from "react-google-login";
import googleLogo from "../../images/googleLogo.png";
import FileBase from "react-file-base64";

function Auth() {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    imageUrl: "",
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

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });

      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const googleFailure = () => {
    alert("Google Sign In was unsuccessful. Try again later");
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

        {signup && (
          <FileBase
            type="file"
            value={formData.imageUrl}
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, imageUrl: base64 })
            }
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

        <GoogleLogin
          buttonText="Google"
          clientId="613407718740-qr15ihkqqgnooi0lf8mkkrt3f9ljatis.apps.googleusercontent.com"
          render={(renderProps) => (
            <>
              <Button
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="outlined"
              >
                <img src={googleLogo} alt={googleLogo} className="google-img" />
                Google
              </Button>
            </>
          )}
          cookiePolicy={"single_host_origin"}
          onSuccess={googleSuccess}
          onfailure={googleFailure}
          autoLoad={false}
        />
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

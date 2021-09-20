import "./styles.css";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { Avatar, Button, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUser } from "../../Actions/auth";
import Loader from "react-loader-spinner";

function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("profile"));
  const [updatedData, setUpdatedData] = useState({
    name: user?.result?.name,
    imageUrl: user?.result?.imageUrl,
  });
  const id = user?.result?._id;
  const updateProfile = () => {
    setLoading(!loading);
    dispatch(updateUser(updatedData, id, history));
    setLoading(!loading);
  };
  const isCustomAuth = user?.token?.length < 500;

  return (
    <div className="profile">
      {loading && (
        <div className="loader">
          <Loader type="Oval" color="grey" height={60} width={60} />
        </div>
      )}
      <Typography
        variant="h5"
        color="primary"
        align="center"
        className="profile-header"
        onClick={() => history.push("/")}
      >
        MANIAC'S
      </Typography>
      <div className="top">
        <Avatar
          className="profile-avatar"
          src={user?.result?.imageUrl}
        ></Avatar>
        {isCustomAuth && (
          <EditIcon
            className="edit-icon"
            color="primary"
            onClick={() =>
              isCustomAuth ? setUpdate(!update) : setUpdate(false)
            }
          />
        )}
      </div>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) =>
            setUpdatedData({ ...updatedData, name: e.target.value })
          }
          value={updatedData.name}
          disabled={!update ? true : false}
        />
        <input type="text" value={user?.result?.email} disabled={true} />
        <Button
          className="file-btn"
          variant="outlined"
          disabled={!update ? true : false}
        >
          <FileBase
            type="file"
            multiple={false}
            disable={!update ? true : false}
            value={updatedData.imageUrl}
            onDone={({ base64 }) =>
              setUpdatedData({ ...updatedData, imageUrl: base64 })
            }
          />
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={!update ? true : false}
          onClick={updateProfile}
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default Profile;

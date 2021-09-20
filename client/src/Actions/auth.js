import * as api from "../Api/index"; // importing all the functions for client request

// SIGN_IN METHOD
export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: "AUTH", data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

// SIGN_UP METHOD
export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: "AUTH", data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

// UPDATE_USER_PROFILE METHOD
export const updateUser = (updatedData, id, history) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(updatedData, id);
    console.log(data);
    dispatch({ type: "AUTH", data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

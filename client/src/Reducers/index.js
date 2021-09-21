import { combineReducers } from "redux";
import auth from "./Auth";
import products from "./Products";
import cart from "./Cart";

export const reducers = combineReducers({ cart, auth, products });

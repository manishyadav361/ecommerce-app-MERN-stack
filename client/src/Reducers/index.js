import { combineReducers } from "redux";
import auth from "./Auth";
import products from "./Products";
export const reducers = combineReducers({ auth, products });

import { combineReducers } from "redux";
import { loggedReducer } from "./loggedReducer";

export const reducers = combineReducers({ loggedReducer });

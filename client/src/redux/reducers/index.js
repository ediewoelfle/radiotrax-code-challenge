import { combineReducers } from "redux";
import { loggedReducer } from "./loggedReducer";
import { dataReducer } from "./dataReducer";

export const reducers = combineReducers({ loggedReducer, dataReducer });

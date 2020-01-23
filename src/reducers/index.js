import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { featuresReducer } from "./featuresReducer";

export default combineReducers({ carReducer, featuresReducer });

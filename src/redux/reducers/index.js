import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import stylesReducer from "./stylesReducer";

export default combineReducers({
    dataReducer,
    stylesReducer
})
import { combineReducers } from "redux";
import products from "./productReducer";
import slider from "./sliderReducer";

const rootReducer = combineReducers({
    products,
    slider
});

export default rootReducer;
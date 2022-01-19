import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { fetchReducer } from "./fetchReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    fetchProducts: fetchReducer
})

export default reducers
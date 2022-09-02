import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import BookReducer from "../reducers/BookReducer";

let Store = createStore(BookReducer, applyMiddleware(thunk))

export default Store;
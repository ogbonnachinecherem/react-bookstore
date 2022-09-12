import { legacy_createStore as createStore } from "redux";
import BookReducer from "../reducers/BookReducer";

let Store = createStore(BookReducer)

export default Store;
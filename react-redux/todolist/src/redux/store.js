import { createStore } from "redux";
import rootReducer from "./reducers";

// Le store est créé via les reducer
export default createStore(rootReducer);

import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

// Exporte la combinaison des reducer. Cette fonction sera
// importée dans le fichier store.js comme "rootReducer"
export default combineReducers({ todos, visibilityFilter });

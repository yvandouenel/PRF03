import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
// Le component "Provider" fourni par le module react-redux permet d'encapsuler
// l'ensemble des components pour qu'il aient tous accès au "store"
// L'objet store est créé dans le fichier src/redux/store.js
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);


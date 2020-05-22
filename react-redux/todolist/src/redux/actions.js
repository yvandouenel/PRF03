/**
 * Fonctions créatrices d'actions. Les actions comprennent un type et un "payload"
 * soit la charge minimum d'information qui sera nécessaire à la modification
 * du state
 *  */
import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0; //initialisation du créateur d'id des todos

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

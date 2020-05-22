// import des types d'action. ici ADD_TODO et TOGGLE_TODO
//
import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};
// Cette fonction sera importée par src/redux/reducers/index.js
// Elle va initialiser le state à un objet avec une tableau vide allIds :
// et un objet vide "byIds"
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload; // Objet décomposé (Object Destructuring)
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}

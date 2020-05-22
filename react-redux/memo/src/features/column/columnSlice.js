import { createSlice } from '@reduxjs/toolkit';

export const columnSlice = createSlice({
  name: 'columns',
  initialState: {
    value: []
  },
  reducers: {
    addCard: (state, action) => {
      console.log("col index:", action.payload.col_index);
      state[action.payload.col_index].cards = [
        {
          id: 3,
          question: "Que veut dire HTTP",
          answer: "Hyper Text Transfert Protocol"
        }
      ]
    },
    modifyCardId: (state, action) => {
      const {col_index, card_index} = action.payload;
      console.log("action dans reducer modifyCardId - col_index : ", col_index);
      state[col_index].cards[card_index].id *= 10;// on multiplie par 10 pour le test
    },
    columnsReceived: (state, action) => {
      console.log("columnsReceived : ", action.payload);
      state.value = action.payload;
    }

  },
});

export const { columnsReceived, addCard, modifyCardId } = columnSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectColumns = state => state.columns.value;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// Cette fonction est un créateur d'action (function creator)
export const callApi = themeid => dispatch => {
  // récupération des données ici
  console.log("Dans callApi");
  fetch(`http://localhost:9001/api/columns`)
    .then(response => response.json())
    .then(json => dispatch(columnsReceived(json)))
  /* setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000); */
};

export default columnSlice.reducer;

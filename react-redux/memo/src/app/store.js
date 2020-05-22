import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import columnReducer from '../features/column/columnSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    columns: columnReducer,
  },
});

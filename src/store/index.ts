import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ListState = {
  todos: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<any>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
    changeTodos: (state, action: PayloadAction<any[]>) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, removeTodo, changeTodos } = listSlice.actions;

const store = configureStore({
  reducer: {
    list: listSlice.reducer,
  },
});

export default store;

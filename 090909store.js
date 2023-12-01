// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import moviesReducer from './reducers/moviesSlice';
import genresReducer from './reducers/genresSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesSlice';
import genresReducer from './reducers/genresSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresReducer,
  },
});

export default store;

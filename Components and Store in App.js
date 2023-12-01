// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import MoviesList from './components/MoviesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MoviesList />
      </div>
    </Provider>
  );
};

export default App;

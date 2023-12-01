// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="container">
          <MoviesList />
        </div>
      </div>
    </Provider>
  );
};

export default App;

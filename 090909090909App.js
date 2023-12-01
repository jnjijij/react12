// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={MoviesList} />
              <Route path="/movie/:id" component={MovieDetails} />
              {/* Add more routes as needed */}
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

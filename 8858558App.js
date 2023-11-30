// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MoviesList from './MoviesList';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={MoviesList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

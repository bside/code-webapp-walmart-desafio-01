import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import ProductList from './ProductList';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

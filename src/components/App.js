import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import ProductList from './ProductList';
import Loading from './Loading';

const AsyncNotFound = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './NotFound'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route component={AsyncNotFound} />
      </Switch>
    </Router>
  );
};

export default App;

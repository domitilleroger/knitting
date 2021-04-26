import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from 'routes';
import './App.scss';
import Header from "common/components/Header/Header";
import Pattern from "knitting/components/Pattern/Pattern";
import Dashboard from "bujo/components/Dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route exact path={routes.knitting} component={Pattern}/>
          <Route path={routes.bujo} component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import { FluxComponent } from './flux';
import { MVCComponent } from './mvc';

const Wrapper = ({ children }) => (
  <div className="wrapper">
    <ul>
      <li><Link to="/flux">flux</Link></li>
      <li><Link to="/mvc">mvc</Link></li>
    </ul>
    <main>
      { children }
    </main>
  </div>
);

render((
  <Router>
    <Wrapper>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/flux" />)} />
        <Route path="/flux" component={ FluxComponent } />
        <Route path="/mvc" component={ MVCComponent } />
      </Switch>
    </Wrapper>
  </Router>
), document.querySelector('#app'));
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { FluxComponent } from './flux';

const Wrapper = ({ children }) => (
  <div className="wrapper">
    <header>
      <h1>DataFlowSample</h1>
    </header>
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
      </Switch>
    </Wrapper>
  </Router>
), document.querySelector('#app'));
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import PrivateRoute from './components/layout/PrivateRoute';
import Login from './components/auth/Login';
import Content from './components/layout/Content';

function App() {
  const levelPath = '(admin||backroom||supervisor||agent)';
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute path={`/${levelPath}`} component={Content} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

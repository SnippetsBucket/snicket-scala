import { Router, Route, browserHistory } from 'react-router';

import Layout from './containers/layout/';
import ManageSnippet from './containers/ManageSnippet/';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="/snippet/create/" component={ManageSnippet} />
      <Route path="/*" />
    </Route>
  </Router>
);

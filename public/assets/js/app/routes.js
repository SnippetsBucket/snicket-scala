import { Router, Route } from 'react-router';

import Layout from './containers/layout/';
import ManageSnippet from './containers/ManageSnippet/';

export default (
  <Router>
    <Route path="/" component={Layout}>
      <Route path="/snippet/create/" component={ManageSnippet} />
      <Route path="/*" />
    </Route>
  </Router>
);

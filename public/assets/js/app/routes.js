import { Router, Route, IndexRoute } from 'react-router';

import Layout from './containers/Layout/';
import SnippetsList from './containers/SnippetsList/';
import ManageSnippet from './containers/ManageSnippet/';

export default (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={SnippetsList} />
      <Route path="/snippet/create/" component={ManageSnippet} />
      <Route path="/*" />
    </Route>
  </Router>
);

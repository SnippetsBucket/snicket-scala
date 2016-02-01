import { Router, Route, IndexRoute } from 'react-router';

import Layout from './containers/Layout/';
import SnippetsListBox from './containers/SnippetsList/';
import ManageSnippet from './containers/ManageSnippet/';
import SnippetDetail from './containers/ManageSnippet/detail';
import Login from './containers/Authentication/login';

export default (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={SnippetsListBox} />
      <Route path="/snippet/create/" component={ManageSnippet} />
      <Route path="/snippet/:snippetId" component={SnippetDetail} />
      <Route path="/login" component={Login} />
      <Route path="/*" />
    </Route>
  </Router>
);

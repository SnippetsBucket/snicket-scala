import { Router, Route, browserHistory } from 'react-router';

import Layout from './containers/layout/';
import Hoge from './components/Hoge';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="/hoge/" component={Hoge} />
      <Route path="/*" />
    </Route>
  </Router>
);

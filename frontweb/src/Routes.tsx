import { Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './pages/Home';
import history from './util/history';


const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>      
    </Switch>
  </Router>
);

export default Routes;

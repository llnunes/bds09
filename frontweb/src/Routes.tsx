import { Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './pages/Home';
import MovieCatalog from './pages/Private/MovieCatalog';
import MovieDetails from './pages/Private/MovieDetails';
import history from './util/history';


const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Route path="/movies" exact>
        <MovieCatalog />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </Router>
);

export default Routes;

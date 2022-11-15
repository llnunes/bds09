import {  NavLink } from 'react-router-dom';
import './styles.css';

const MovieCatalog = () => {
  return (
    <div className='movie-catalog-container'>
        <h1>Tela listagem de filmes</h1>

        <NavLink to='/movies/1'>
            <p>Acessar /movies/1</p>
        </NavLink>
        <NavLink to='/movies/2'>
            <p>Acessar /movies/2</p>
        </NavLink>

    </div>  
  );
};

export default MovieCatalog;

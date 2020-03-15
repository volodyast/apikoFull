import SearchForm from './components/Header/SearchForm';
import loadPopularMovies from './controllers/movieController/loadPopularMovies';

const app = document.getElementById('app');


app.appendChild(SearchForm());

document.addEventListener('DOMContentLoaded', loadPopularMovies);

import { useEffect } from 'react'
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=6882f385';

const App = () => {
  

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Avengers');
  }, [] );
  
  const movie = {
    "Title": "The Avengers",
    "Year": "2012",
    "imdbID": "tt0848228",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
}
  return (
    <div className='app'>
      <h1>Movie Search</h1>
      <div className='search'>
        <input 
          placeholder='Search for movies'
          value='Superman'
          onChange={() => {}}
        />
        <img 
          src={SearchIcon} 
          alt='Search' 
          onClick={() => {}} 
        />
      </div>

      <div className='container'>
        <MovieCard movie={movie}/>
      </div>
    </div>
  )
}

export default App
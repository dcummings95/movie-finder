import { useEffect } from 'react'

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
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App
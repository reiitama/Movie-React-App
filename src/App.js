import './App.css';
import { getMovieList, searchMovie } from "./api"
import { useEffect, useState } from "react"

const App = () => {
  const [RateMovies, setRateMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setRateMovies(result)
    })
  }, [])

const RateMovieList = () => {
    return RateMovies.map((movie, i) => {
      return (
        <div className="mov-wrap" key={i}>
          <div className="mov-title">{movie.title}</div>
          <img
            className="mov-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="mov-rate">Rating : {movie.vote_average}</div>
          <div className="mov-date">Release Date : {movie.release_date}</div>
        </div>
      )
    })
  }

  const search = async (q) => {
    const query = await searchMovie(q)
    // setRateMovies(query.results)
    console.log({query: query})
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie List by Reitama</h1>
        <input 
        placeholder='Search' 
        className='mov-search' 
        onChange={( target ) => search(target.value)}
        />
        <div className="mov-container">
          <RateMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;

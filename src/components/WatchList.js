import React, { useContext } from 'react';
import MovieCard from './MovieCard';
import { GlobalContext } from "../context/GlobalProvider";

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);
  console.log(watchList);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">MY WatchList</h1>
        </div>

        {
          watchList.length > 0 ? (
            <div className="movie-grid">
              {
                watchList.map((movie) => (
                  <MovieCard movie={movie} type="watchList"/>
                ))
              }
            </div>
          ) :
            <h2 className="no-movies">No movies in your watchList</h2>
        }
      </div>
    </div>
  )
};

export default WatchList;
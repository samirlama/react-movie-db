import  React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalProvider";

const ResultCard = ({movie}) => {
  const { addWatchList, watchList } = useContext(GlobalContext);

  const movieListDisabled = watchList.some((m) => m.id === movie.id);

  console.log(watchList);
  return(
    <div className="result-card">
      <div className="poster-wrapper">
        {
          movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt = {`${movie.title} Poster`} />
          ) : (
              <div className="filter-poster"></div>
              )
        }
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {
              movie.release_date ? movie.release_date.substring(0, 4) : '-'
            }
          </h4>
        </div>
        <div className="controls">
          <button className="btn" disabled={movieListDisabled} onClick={() => addWatchList(movie)}>Add to watch List</button>
        </div>
      </div>
    </div>
  )
};

export default ResultCard;
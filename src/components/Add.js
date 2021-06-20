import React, { useState } from 'react';
import ResultCard from './ResultCard';

const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  async function requestApi(e){
    setQuery(e.target.value);
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${e.target.value}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text"
                   placeholder="Search for a movie"
                   value={query}
                   onChange={requestApi}
            />
            { results.length > 0 && (
              <ul className="results">
                {
                  results.map((res) => {
                    return (
                      <li key={res.id}>
                        <ResultCard movie={res} />
                      </li>
                    )
                  })
                }
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Add;
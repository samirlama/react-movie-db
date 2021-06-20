import React from 'react';

const MovieControls = ({ movie, type}) => {
  return (
    <div className="inner-card-controls">
      {
        type === 'watchList' && (
          <>
            <button className="ctrl-btn">
              Add to Watched
            </button>

            <button className="ctrl-btn">
              Remove
            </button>

          </>
        )
      }
    </div>
  )
};

export default MovieControls;
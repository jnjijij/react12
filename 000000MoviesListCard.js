// MoviesListCard.js
import React from 'react';

const MoviesListCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster_path} alt={movie.title} className="img-fluid" />
      <div className="movie-info p-3">
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
      </div>
    </div>
  );
};

export default MoviesListCard;

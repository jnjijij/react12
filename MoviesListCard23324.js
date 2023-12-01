// MoviesListCard.js
import React from 'react';

const MoviesListCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
    </div>
  );
};

export default MoviesListCard;

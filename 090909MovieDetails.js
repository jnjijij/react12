// MovieDetails.js
import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.genre}</p>
      <p>{movie.releaseDate}</p>
      {/* Add more details */}
    </div>
  );
};

export default MovieDetails;

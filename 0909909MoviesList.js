// MoviesList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectMovies } from '../reducers/moviesSlice';
import MoviesListCard from './MoviesListCard';

const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <section id="genres">
        <h2>Genres</h2>
        <div className="movies-list">
          {movies.map((movie) => (
            <MoviesListCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
      {/* Add more sections/components as needed */}
    </div>
  );
};

export default MoviesList;

// MoviesList.js
import React from 'react';
import { connect } from 'react-redux';
import { selectGenres, selectGenresStatus } from '../reducers/genresSlice';
import GenreBadge from './GenreBadge';

const GenresList = ({ genres, activeGenreId }) => {
  return (
    <div>
      <h2>Genres List</h2>
      {genres.map((genre) => (
        <GenreBadge key={genre.id} genre={genre} isActive={genre.id === activeGenreId} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  genres: selectGenres(state),
  status: selectGenresStatus(state),
});

export default connect(mapStateToProps)(GenresList);

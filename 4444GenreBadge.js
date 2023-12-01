// GenreBadge.js
import React from 'react';

const GenreBadge = ({ genre, isActive }) => {
  return (
    <div className={`genre-badge ${isActive ? 'active' : ''}`}>
      {genre.name}
    </div>
  );
};

export default GenreBadge;

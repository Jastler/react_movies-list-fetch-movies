import React from 'react';

import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({
  movies = [],
}) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId || movie.imdbID} {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string,
      imdbID: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

MoviesList.defaultTypes = {
  imdbId: '',
  imdbID: '',
};

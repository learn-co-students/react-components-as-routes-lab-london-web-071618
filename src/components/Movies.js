import React from 'react'
import { movies } from '../data'

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div key={movie.title}>
          <h1>{movie.title}</h1>
          <h3>Time: {movie.time}</h3>
          <h3>Time: {movie.metascore}</h3>
          <ul>
            {movie.genres.map(genre => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
      )
      )}
    </div>
  )
};

export default Movies

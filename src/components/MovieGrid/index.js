import React from 'react'
import MovieCard from '../MovieCard'

class MovieGrid extends React.Component {
  render() {
    const {movies} = this.props
    return (
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    )
  }
}

export default MovieGrid

import React from 'react'
import {Link} from 'react-router-dom'

class MovieCard extends React.Component {
  render() {
    const {movie} = this.props
    return (
      <div className='movie-card'>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.poster_path}
        />
        <h3>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
        <Link to={`/movie/${movie.id}`}>
          <button type='button'>View Details</button>
        </Link>
      </div>
    )
  }
}

export default MovieCard

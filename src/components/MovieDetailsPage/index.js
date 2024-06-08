import React from 'react'

class MovieDetailsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      cast: [],
    }
  }

  componentDidMount() {
    this.fetchMovieDetails()
    this.fetchMovieCast()
  }

  fetchMovieDetails = async () => {
    const {match} = this.props
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=94e137d23f843381fba5b336d14d72ca&language=en-US`,
    )
    const data = await response.json()
    this.setState({movie: data})
  }

  fetchMovieCast = async () => {
    const {match} = this.props
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=94e137d23f843381fba5b336d14d72ca&language=en-US`,
    )
    const data = await response.json()
    this.setState({cast: data.cast})
  }

  render() {
    const {movie, cast} = this.state
    if (!movie) {
      return <div>Loading...</div>
    }

    return (
      <div className="movie-details">
        <div className="movie-details-section">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>Rating: {movie.vote_average}</p>
            <p>Duration: {movie.runtime} minutes</p>
            <p>Genre: {movie.genres.map(genre => genre.name).join(', ')}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Overview: {movie.overview}</p>
          </div>
        </div>
        <div className="cast-details-section">
          <h3>Cast</h3>
          <div className="cast-grid">
            {cast.map(member => (
              <div key={member.cast_id} className="cast-member">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`}
                  alt={member.name}
                />
                <p>
                  {member.name} as {member.character}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetailsPage

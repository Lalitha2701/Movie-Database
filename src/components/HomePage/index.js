import React from 'react'
import MovieGrid from '../MovieGrid'
import Pagination from '../Pagination'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      currentPage: 1,
      totalPages: 1,
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }

  componentDidUpdate(prevProps, prevState) {
    const {currentPage} = this.state
    if (prevState.currentPage !== currentPage) {
      this.fetchMovies()
    }
  }

  fetchMovies = async () => {
    const {currentPage} = this.state
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=94e137d23f843381fba5b336d14d72ca&language=en-US&page=${currentPage}`,
    )
    const data = await response.json()
    this.setState({
      movies: data.results,
      totalPages: data.total_pages,
    })
  }

  handlePageChange = page => {
    this.setState({currentPage: page})
  }

  render() {
    const {movies, currentPage, totalPages} = this.state
    return (
      <div>
        <MovieGrid movies={movies} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    )
  }
}

export default HomePage

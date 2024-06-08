import React from 'react';
import MovieGrid from '../MovieGrid';
import Pagination from '../Pagination';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentPage: 1,
      totalPages: 1,
      query: new URLSearchParams(this.props.location.search).get('query') || '',
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage || prevState.query !== this.state.query) {
      this.fetchMovies();
    }
  }

  fetchMovies = async () => {
    const { currentPage, query } = this.state;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=94e137d23f843381fba5b336d14d72ca&language=en-US&query=${query}&page=${currentPage}`);
    const data = await response.json();
    this.setState({
      movies: data.results,
      totalPages: data.total_pages,
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    const { movies, currentPage, totalPages } = this.state;
    return (
      <div>
        <MovieGrid movies={movies} />
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={this.handlePageChange} 
        />
      </div>
    );
  }
}

export default SearchPage;
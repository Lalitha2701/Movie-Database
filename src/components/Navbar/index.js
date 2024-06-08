import React from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {query: ''}
  }

  handleInputChange = event => {
    this.setState({query: event.target.value})
  }

  handleSearch = () => {
    this.props.history.push(`/search?query=${this.state.query}`)
  }

  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar-brand">movieDB</h1>
        <div className="navbar-links">
          <Link to="/">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/upcoming">Upcoming</Link>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)

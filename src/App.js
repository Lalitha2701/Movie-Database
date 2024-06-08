import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TopRatedPage from './components/TopRatedPage';
import UpcomingPage from './components/UpcomingPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import SearchPage from './components/SearchPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/top-rated" component={TopRatedPage} />
            <Route path="/upcoming" component={UpcomingPage} />
            <Route path="/movie/:id" component={MovieDetailsPage} />
            <Route path="/search" component={SearchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
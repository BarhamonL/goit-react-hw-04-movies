import React, { Component } from "react";

import Spinner from "../Components/General/Spinner";
import MoviesList from "../Components/MoviesList";

import showToastError from "../utils/showToastError";
import moviesSearchApi from "../Services/moviesSearchApi";

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };
  componentDidMount() {
    this.setState({ isLoading: true });

    moviesSearchApi
      .fetchTrendingMovies()
      .then((res) => this.setState({ movies: res }))
      .catch((error) => showToastError(`Ups...error. Error: ${error.message}`))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <>
        <h2>Trending Movies</h2>
        {isLoading && <Spinner />}
        <MoviesList {...this.props} movies={movies} />
      </>
    );
  }
}

export default HomePage;

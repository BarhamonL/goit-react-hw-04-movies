import React, { Component } from "react";

import SearchForm from "../Components/SearchForm";
import MoviesList from "../Components/MoviesList";
import Spinner from "../Components/General/Spinner";

import moviesSearchApi from "../Services/moviesSearchApi";
import getQueryParams from "../utils/getQueryParams";
import showToastError from "../utils/showToastError";
import showToastSuccess from "../utils/showToastSuccess";

class MoviesPage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = (someQuery) => {
    this.setState({ isLoading: true });
    moviesSearchApi
      .fetchMoviesWithQuery(someQuery)
      .then((movies) => {
        if (movies.length === 0) {
          showToastError(`No results were found for your request`);
        } else
          showToastSuccess(`
        Movie found`);
        this.setState({ movies });
      })
      .catch((error) => showToastError(`Ups...error. Error: ${error.message}`))
      .finally(() => this.setState({ isLoading: false }));
  };

  changeQuery = (query) => {
    if (!query) {
      showToastError(`Enter some query`);
      return;
    }
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, isLoading } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.changeQuery} />
        {isLoading && <Spinner />}
        {movies.length > 0 && <MoviesList {...this.props} movies={movies} />}
      </>
    );
  }
}

export default MoviesPage;

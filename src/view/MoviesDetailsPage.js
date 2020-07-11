import React, { Component, Suspense, lazy } from "react";
import { Route } from "react-router-dom";

import SubNavigation from "../Components/SubNavigation";
import MovieInfo from "../Components/MovieInfo";
import Section from "../Components/General/Section";
import Spinner from "../Components/General/Spinner";

import moviesSearchApi from "../Services/moviesSearchApi";
import routes from "../routes";
import showToastError from "../utils/showToastError";

const Cast = lazy(() => import("../view/Cast" /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import("../view/Reviews" /* webpackChunkName: "reviews" */)
);

class MoviesDetailsPage extends Component {
  state = {
    movie: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    moviesSearchApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) =>
        showToastError(`Ups...error. Error: ${error.status_message}`)
      )
      .finally(() => this.setState({ isLoading: false }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    state && state.from
      ? this.props.history.push(state.from)
      : this.props.history.push(routes.movies);
  };

  render() {
    const { isLoading, movie } = this.state;
    const { location } = this.props;
    return (
      <div>
        {isLoading && <Spinner />}
        {movie && (
          <div>
            <button type="button" onClick={this.handleGoBack}>
              &larr; Go back
            </button>
            <>
              <MovieInfo movie={movie} />
              <Section title="Additional information">
                <SubNavigation
                  id={this.state.movie.id}
                  locationToSend={
                    location.state && location.state.from
                      ? location.state.from
                      : routes.movies
                  }
                />
              </Section>
            </>
            <Suspense fallback={<Spinner />}>
              <Route path={routes.cast} component={Cast} />
              <Route path={routes.reviews} component={Reviews} />
            </Suspense>
          </div>
        )}
      </div>
    );
  }
}

export default MoviesDetailsPage;

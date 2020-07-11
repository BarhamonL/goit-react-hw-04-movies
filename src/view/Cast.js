import React, { Component } from "react";

import CastList from "../Components/CastList";
import Spinner from "../Components/General/Spinner";

import moviesSearchApi from "../Services/moviesSearchApi";
import scroll from "../utils/scroll";
import showToastError from "../utils/showToastError";

class Cast extends Component {
  state = {
    cast: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    moviesSearchApi
      .fetchMovieCast(this.props.match.params.movieId)
      .then((cast) => this.setState({ cast }))
      .catch((error) => showToastError(`Ups...error. Error: ${error.message}`))
      .finally(() => {
        this.setState({ isLoading: false });
        scroll();
      });
  }

  render() {
    const { cast, isLoading } = this.state;
    return (
      <>
        {isLoading && <Spinner />}
        {cast && <CastList cast={cast} />}
      </>
    );
  }
}

export default Cast;

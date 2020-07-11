import React, { Component } from "react";

import Reviews from "../Components/Reviews";
import Spinner from "../Components/General/Spinner";

import moviesSearchApi from "../Services/moviesSearchApi";
import scroll from "../utils/scroll";
import showToastError from "../utils/showToastError";

class Review extends Component {
  state = {
    reviews: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    moviesSearchApi
      .fetchMovieReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews }))
      .catch((error) => showToastError(`Ups...error. Error: ${error.message}`))
      .finally(() => {
        this.setState({ isLoading: false });
        scroll();
      });
  }

  render() {
    const { reviews, isLoading } = this.state;
    return (
      <>
        {isLoading && <Spinner />}
        {reviews && <Reviews reviews={reviews} />}
      </>
    );
  }
}

export default Review;

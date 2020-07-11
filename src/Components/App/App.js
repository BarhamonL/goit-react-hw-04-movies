import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "../General/Layout";
import Spinner from "../General/Spinner";

import routes from "../../routes";
import "./App.css";

// import HomePage from "../HomePage";
// import MoviesPage from "../MoviesPage";

import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomePage = lazy(() =>
  import("../../view/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("../../view/MoviesPage" /* webpackChunkName: "movies" */)
);
const MoviesDetailsPage = lazy(() =>
  import("../../view/MoviesDetailsPage" /* webpackChunkName: "movie-details" */)
);

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path={routes.home} exact component={HomePage} />
              <Route path={routes.movies} exact component={MoviesPage} />
              <Route path={routes.movieId} component={MoviesDetailsPage} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
          <ToastContainer />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

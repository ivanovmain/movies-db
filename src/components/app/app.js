import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './app.scss';
import WithMoviesDbService from "../hoc/with-movies-db-services";
import { connect } from 'react-redux';
import { getMovies } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const App = () => {
  return (
    <Switch>
      <Route path='/' component={Spinner} exact/>
      <Route path='/movies' component={ErrorIndicator}/>
    </Switch>
  )
};
const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { moviesDbService } = ownProps;
  return {
    fetchMovies: () => {
      moviesDbService
        .getMovies()
        .then((data) => {
          dispatch(getMovies(data))
        })
    }
  }
};

export default
WithMoviesDbService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App));
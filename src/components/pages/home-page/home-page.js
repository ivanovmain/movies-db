import React, { Component } from 'react';
import './home-page.scss';
import MovieCard from "../../movie-card";
import { popularMoviesError, popularMoviesLoaded, popularMoviesRequsted, getGenres } from "../../../actions";
import WithMoviesDbService from "../../hoc/with-movies-db-services";
import { connect } from "react-redux";
import Spinner from "../../spinner";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchGenres();
  }
  render(){
    const { movies, loading, genres } = this.props;
    if(loading){
      return <Spinner/>
    }
    const moviesCards = movies.map((item) => {
      return <MovieCard key={item.id} genres={genres} movie={item} loading={loading}/>
    });
    return(
      <div className="Content">
        <div className="container">
          {
            loading ? <Spinner/> : <div className="Content-inner">{moviesCards}</div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    loading: state.loading,
    genres: state.genres
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { moviesDbService } = ownProps;
  return {
    fetchMovies: () => {
      dispatch(popularMoviesRequsted());
      moviesDbService
        .getPopularMovies()
        .then((data) => {
          dispatch(popularMoviesLoaded(data.results))
        })
        .catch((err) => dispatch(popularMoviesError(err)))
    },
    fetchGenres: () => {
      moviesDbService
        .getMovieGengres()
        .then((genres) => {
          dispatch(getGenres(genres.genres))
        })
    }
  }
};

export default
WithMoviesDbService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage));

import React, { Component } from 'react';
import './movie.scss';
import WithMoviesDbService from "../../hoc/with-movies-db-services";
import { connect } from "react-redux";
import { movieLoaded, movieError, movieRequested } from "../../../actions";
import Spinner from "../../spinner";


class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.id);
  }
  listGenerator(arr){
    return  arr.map(({id, name}, idx) => {
      const space = idx !== arr.length - 1 ? ', ' : null;
      return (
        <span key={name} className="genreItem">
          {name}
          {space}
        </span>
      )
    });
  }

  render() {
    const { movieLoading } = this.props;
    if(movieLoading){
      return <Spinner/>;
    }
    const {id, original_title, budget, overview, genres, release_date, poster_path, production_countries, vote_average} = this.props.movie;
    const budgetFormated = budget.toLocaleString('ru-RU');
    const genreList = this.listGenerator(genres);
    const countryList = this.listGenerator(production_countries);
    const poster = `https://image.tmdb.org/t/p/w300/${poster_path}`;
    return (
      <div className="container">
        <div className="movie-wrapper">
          <div className="movie-poster"><img src={poster} alt={original_title}/></div>
          <div className="movie-desc">
            <ul>
              <li>Title:
                <span className="list-content">
                  {original_title}
                </span>
              </li>
              <li>Country:
                <span className="list-content">
                  {countryList}
                </span>
              </li>
              <li>Genres:
                <span className="list-content">
                  {genreList}
                </span>
              </li>
              <li>Year:
                <span className="list-content">
                  {release_date}
                </span>
              </li>
              <li>Budget:
                <span className="list-content">
                  ${budgetFormated}
                </span>
              </li>
              <li>Description:
                <span className="list-content">
                  {overview}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie,
    movieLoading: state.movieLoading
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { moviesDbService } = ownProps;
  return {
    fetchMovie: (id) => {
      dispatch(movieRequested());
      moviesDbService
        .getMovie(id)
        .then((movie) => {
          dispatch(movieLoaded(movie))
        })
        .catch((err) =>{
          dispatch(movieError(err.message))
        })

    }
  }
};

export default WithMoviesDbService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie));
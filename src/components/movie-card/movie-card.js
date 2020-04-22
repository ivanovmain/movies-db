import React, { Component } from 'react';
import './movie-card.scss';
import Spinner from "../spinner";
import { Link } from "react-router-dom";
import WithMoviesDbService from "../hoc/with-movies-db-services";
import { connect } from "react-redux";
import { movieAddedToWishlist } from "../../actions";


class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, original_title, vote_average, release_date, poster_path, genre_ids } = this.props.movie;
    const { onAddedToWishList, wishList } = this.props;
    const releseData = release_date.split('-')[0];
    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    let genre = '';
    if(!genre_ids){
      genre = this.props.genres[0];
    }else{
      genre = this.props.genres.find(({id}) => {
        return id === genre_ids[0];
      });
    }
    let buttonClass = 'favorite-link favorite-card';
    const isWish = wishList.find((wishId) => wishId === id);
    if(isWish){
      buttonClass = buttonClass + ' favorite-card-on';
    }
    if(genre === undefined){
      return <Spinner/>
    }
    return (
      <div className="Card">
        <div className="poster-wrapper">
          <img src={poster} alt="Poster"/>
          <button
            onClick={() => onAddedToWishList(id)}
            className={buttonClass}>
            <i className="fa fa-bookmark favorite"></i>
          </button>
          <span className="Card-rate">{vote_average}</span>
        </div>
        <div className="Card-description">

          <div className="Card-label">
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </div>
          <div className="Card-info">
            <span className="Card-year">{releseData}</span>,
            <span className="Card-genres"> {genre.name}</span>

          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    wishList: state.wishList
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddedToWishList: (id) => {
      dispatch(movieAddedToWishlist(id));
    }
  }
};

export default WithMoviesDbService(
                connect(
                  mapStateToProps,
                  mapDispatchToProps
                )(MovieCard));
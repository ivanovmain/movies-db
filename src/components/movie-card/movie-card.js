import React, { Component } from 'react';
import './movie-card.scss';
import Spinner from "../spinner";


export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.loading){
      return <Spinner/>
    }
    const { original_title, vote_average, release_date, poster_path, genre_ids } = this.props.movie;
    const releseData = release_date.split('-')[0];
    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const genre = this.props.genres.find(({id, name}) => {
      return id === genre_ids[0];
    }).name;
    return (
      <div className="Card">
        <div className="poster-wrapper">
          <img src={poster} alt="Poster"/>
          <a className="favorite-link favorite-card favorite-card-on favorite-card-off" href="#">
            <i className="fa fa-bookmark favorite"></i>
          </a>
          <span className="Card-rate">{vote_average}</span>
        </div>
        <div className="Card-description">

          <div className="Card-label">
            <a href="#">{original_title}</a>
          </div>
          <div className="Card-info">
            <span className="Card-year">{releseData}</span>,
            <span className="Card-genres"> {genre}</span>

          </div>
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react';
import './search-panel.scss';
import { WithMoviesDbService } from "../hoc";
import { connect } from "react-redux";
import {
  searchError,
  searchLoaded,
  searchRequested
} from "../../actions";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.onChange = (e) => {
      this.props.searchMovie(encodeURI(e.target.value))
    }
  }


  render() {
    console.log(this.props.searchData)
    return (
      <div className="SearchPanel">
        <input
          type="text"
          placeholder="Movie search"
          onChange={this.onChange}
        />
        <ul className='search-data'>
          <li>Red 2019</li>
          <li>Reder 2011</li>
          <li>Force Red 2001</li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    searchData: state.searchData
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { moviesDbService } = ownProps;
  return {
    searchMovie: (str) => {
      dispatch(searchRequested());
      moviesDbService
        .searchMovie(str)
        .then((movies) => {
          dispatch(searchLoaded(movies))
        })
        .catch((err) =>{
          dispatch(searchError(err.message))
        })
    }
  }
};

export default WithMoviesDbService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchPanel));
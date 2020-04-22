import React, { Component } from 'react';
import { WithMoviesDbService } from '../../hoc'
import { connect } from "react-redux";
import { movieLoadedToWishList, movieRequestedToWishList, movieErrorToWishList } from "../../../actions";
import MovieCard from "../../movie-card/movie-card";
import Spinner from "../../spinner";
class WishList extends Component {
  componentDidMount() {
    this.props.wishList.forEach((id) => {
      this.props.fetchWishMovie(id)
    })
  }

  render(){
    const { wishListData, wishListDataLoading, wishList: wishListIds } = this.props;
    const wishList = wishListData.map((item) => {
      const { genres } = item;
      return <MovieCard key={item.id} genres={genres} movie={item} loading={wishListDataLoading}/>
    });
    if(wishListIds.length === 0){
      return (
        <div className="container">
          <h1>Wishlist is empty!</h1>
        </div>
      )
    }
    if(wishListDataLoading){
      return <Spinner/>
    }
    return (
      <div className="Content">
        <div className="container">
          {
            wishListDataLoading ? <Spinner/> : <div className="Content-inner">{wishList}</div>
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    wishList: state.wishList,
    wishListData: state.wishListData,
    wishListDataLoading: state.wishListDataLoading
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { moviesDbService } = ownProps;
  return {
    fetchWishMovie: (id) => {
      dispatch(movieRequestedToWishList());
      moviesDbService
        .getMovie(id)
        .then((movie) => {
          dispatch(movieLoadedToWishList(movie))
        })
        .catch((err) =>{
          dispatch(movieErrorToWishList(err.message))
        })

    }
  }
};


export default WithMoviesDbService(
                connect(
                  mapStateToProps,
                  mapDispatchToProps
                )(WishList));
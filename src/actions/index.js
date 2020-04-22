export const popularMoviesRequsted = () => {
  return {
    type: 'FETCH_POPULAR_MOVIES_REQUEST'
  }
};
export const popularMoviesLoaded = (movies) => {
  return {
    type: 'FETCH_POPULAR_MOVIES_SUCCESS',
    payload: movies
  }
};
export const popularMoviesError = (error) => {
  return {
    type: 'FETCH_POPULAR_MOVIES_FAILURE',
    payload: error
  }
};

export const getGenres = (genres) => {
  return {
    type: 'GET_GENRES',
    payload: genres
  }
};

export const movieLoaded = (movie) => {
  return {
    type: 'FETCH_MOVIE_SUCCESS',
    payload: movie
  }
};
export const movieRequested = () => {
  return {
    type: 'FETCH_MOVIE_REQUEST'
  }
};
export const movieError = (error) => {
  return {
    type: 'FETCH_MOVIE_FAILURE',
    payload: error
  }
};
export const movieAddedToWishlist = (id) => {
 return {
   type: 'MOVIE_ADDED_TO_WISHLIST',
   payload: id
 };
};
  export const movieLoadedToWishList = (movie) => {
    return {
      type: 'FETCH_WISH_MOVIE_SUCCESS',
      payload: movie
    }
  };
  export const movieRequestedToWishList = () => {
    return {
      type: 'FETCH_WISH_MOVIE_REQUEST'
    }
  };
  export const movieErrorToWishList = (error) => {
    return {
      type: 'FETCH_WISH_MOVIE_FAILURE',
      payload: error
    }
  };

export const searchLoaded = (movie) => {
  return {
    type: 'SEARCH_SUCCESS',
    payload: movie
  }
};
export const searchRequested = () => {
  return {
    type: 'SEARCH_REQUEST'
  }
};
export const searchError = (error) => {
  return {
    type: 'SEARCH_FAILURE',
    payload: error
  }
};

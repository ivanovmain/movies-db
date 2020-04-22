const initialState = {
  movies: [],
  loading: true,
  error: false,
  genres: [],
  movie: {},
  movieLoading: true,
  wishList: [],
  wishListData: [],
  wishListDataLoading: true,
  searchData: [],
  searchStr: '',
  searchLoading: true
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR_MOVIES_REQUEST':
      return {
        ...state,
        movies: [],
        loading: true,
        error: false
      };
    case 'FETCH_POPULAR_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case 'FETCH_POPULAR_MOVIES_FAILURE':
      return {
        ...state,
        error: action.payload
      };
    case 'GET_GENRES':
      return {
        ...state,
        genres: action.payload
      };
    case 'FETCH_MOVIE_REQUEST':
      return {
        ...state,
        movieLoading: true,
        error: false,
        movie: {}
      };
    case 'FETCH_MOVIE_SUCCESS':
      return {
        ...state,
        movie: action.payload,
        movieLoading: false,
        error: false
      };
    case 'FETCH_MOVIE_FAILURE':
      return {
        ...state,
        error: action.payload
      };
    case 'MOVIE_ADDED_TO_WISHLIST':{
      const { wishList, wishListData } = state;
      const isWishIdx = wishList.findIndex((id) => id === action.payload);
      const dataId = wishListData.findIndex(({id}) => id === action.payload);
      if(isWishIdx === -1){
        return {
          ...state,
          wishList: [...wishList, action.payload]
        }
      }else {
        return {
          ...state,
          wishList: [
            ...wishList.slice(0, isWishIdx),
            ...wishList.slice(isWishIdx + 1)
          ],
          wishListData: [
            ...wishListData.slice(0, dataId),
            ...wishListData.slice(dataId + 1)
          ]
        }
      }
    }
    case 'FETCH_WISH_MOVIE_REQUEST':{
      return {
        ...state,
        wishListDataLoading: true,
        wishListData: []
      }
    }
    case 'FETCH_WISH_MOVIE_SUCCESS':{
      return {
        ...state,
        wishListDataLoading: false,
        wishListData: [...state.wishListData, action.payload]
      }
    }
    case 'FETCH_WISH_MOVIE_FAILURE':
      return {
        ...state,
        error: action.payload
      };
    case 'SEARCH_REQUEST':{
      return {
        ...state,
        searchLoading: true,
        searchData: []
      }
    }
    case 'SEARCH_SUCCESS':{
      return {
        ...state,
        searchLoading: false,
        searchData: action.payload
      }
    }
    case 'SEARCH_FAILURE':{
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state;
  }
};

export default reducer;
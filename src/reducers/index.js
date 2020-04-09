const initialState = {
  movies: [],
  loading: true,
  genres: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET':
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case 'GET_GENRES':
      return {
        ...state,
        genres: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
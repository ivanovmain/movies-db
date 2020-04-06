const initialState = {
  movies: [
    {
      id: 1,
      title: 'Red',
      year: 2010
    }
  ]
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET':
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
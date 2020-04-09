export const getMovies = (movies) => {
  return {
    type: 'GET',
    payload: movies
  }
};

export const getGenres = (genres) => {
  return {
    type: 'GET_GENRES',
    payload: genres
  }
};
export const getMovies = (movies) => {
  return {
    type: 'GET',
    payload: movies
  }
};
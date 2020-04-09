export default class MoviesDbService {
  _apiBase = 'https://api.themoviedb.org/3/';
  _apiKey = '?api_key=60624f7b598f84772877b4fc4fd72b4e';

  getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  };
  getPopularMovies = async (page) => {
    const url = `${this._apiBase}movie/popular${this._apiKey}&page=${page}`;
    return this.getResource(url);
  };
  getMovieGengres = async () => {
    const url = `${this._apiBase}genre/movie/list${this._apiKey}`;
    return this.getResource(url);
  }
}

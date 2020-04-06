export default class MoviesDbService {
  data = [
    {
      id: 1,
      title: 'Your name',
      year: 2016
    }
  ];
  getMovies() {
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(this.data);
      }, 700)
    })
  }
}
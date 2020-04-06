import React from 'react';
import { MoviesDbServiceConsumer } from "../movies-db-service-context";

const WithMoviesDbService = (Wrapped) => {
  return (props) => {
    return (
      <MoviesDbServiceConsumer>
        {
          (moviesDbService) => {
            return (
              <Wrapped {...props} moviesDbService={moviesDbService}/>
            )
          }
        }
      </MoviesDbServiceConsumer>
    )
  }
};

export default WithMoviesDbService;
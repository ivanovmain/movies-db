import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MoviesDbServiceProvider } from "./components/movies-db-service-context";
import { BrowserRouter as Router} from 'react-router-dom';
import MoviesDbService from "./services/movies-db-service";
import App from './components/app'
import ErrorBoundry from "./components/error-boundry";
import store from './store';


const MovieDbService = new MoviesDbService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <MoviesDbServiceProvider value={MovieDbService}>
        <Router>
          <App/>
        </Router>
      </MoviesDbServiceProvider>
    </ErrorBoundry>
  </Provider>
  ,
  document.getElementById('root'));
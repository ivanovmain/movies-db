import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './app.scss';
import ErrorIndicator from "../error-indicator";
import Header from "../header";
import HomePage from "../pages/home-page";
import Movie from "../pages/movie";
import WishList from "../pages/wish-list-page";

export default class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/movies' exact component={ErrorIndicator}/>
          <Route path='/movies/:id'
                 render={
                   ({match})=>{
                     const { id } = match.params;
                    return <Movie id={id}/>
                   }}/>
          <Route path='/wishlist' exact component={WishList}/>
        </Switch>
      </div>
      )
  }
}

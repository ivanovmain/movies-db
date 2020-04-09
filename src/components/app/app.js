import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './app.scss';
import ErrorIndicator from "../error-indicator";
import Header from "../header";
import HomePage from "../pages/home-page";

export default class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/movies' component={ErrorIndicator}/>
        </Switch>
      </div>
      )
  }
}

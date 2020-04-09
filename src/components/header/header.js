import React from 'react';
import logo from './logo.png';
import './header.scss';
import SearchPanel from "../search-panel";
const Header = () => {
  return (
    <header className='header'>
      <div className="container header-wrapper">
        <div className="logo-wrapper">
          <img src={logo} alt="logotype"/>
          <span className='logo-text'>Movie DB</span>
        </div>
        <div className='header-group'>
          <a className="favorite-link" href="#"><i className="fa fa-bookmark favorite"></i></a>
          <SearchPanel />
        </div>
      </div>
    </header>

  )
};

export default Header;
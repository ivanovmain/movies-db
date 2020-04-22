import React from 'react';
import logo from './logo.png';
import './header.scss';
import SearchPanel from "../search-panel";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className='header'>
      <div className="container header-wrapper">
        <div className="logo-wrapper">
          <Link to='/'>
            <img src={logo} alt="logotype"/>
          </Link>
          <Link to='/'>
          <span className='logo-text'>Movie DB</span>
          </Link>
        </div>
        <div className='header-group'>
          <Link to='/wishlist' className="favorite-link"><i className="fa fa-bookmark favorite"></i></Link>
          <SearchPanel />
        </div>
      </div>
    </header>

  )
};

export default Header;
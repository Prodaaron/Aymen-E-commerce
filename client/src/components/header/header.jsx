import React from 'react';
import logo from '../../assets/Logo/Tafach_logo_transparent.png';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="top-header">
        <div className="top-left-header">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive? 'nav-link active' : 'nav-link'
            }
          >
            <div className="logo-container">
              <img className="logo" src={logo} alt="Logo" />
              <h1 className="web-name">Tafach Ambassador</h1>
            </div>
          </NavLink>
          </div>

        

        <div className="top-middle-header">
          <nav className="navbar">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/*<div className="top-right-header"></div>*/}
      </div>

      <div className="bottom-header">
        <h4 className='ad-banner-text'>Holiday Sale! {'(Advertisment here)'}</h4>
      </div>
    </div>
  );
};

export default Header;
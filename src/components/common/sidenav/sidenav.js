import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidenav.css';

const SideNav = ({ isVisible, toggleNav }) => {
  return (
    <aside className={`side-nav ${isVisible ? 'visible' : ''}`} onClick={toggleNav}>
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active">HOME</NavLink></li>
          <li><NavLink to="/book" activeClassName="active">BOOK</NavLink></li>
          <li><NavLink to="/facility" activeClassName="active">FACILITY</NavLink></li>
          <li><NavLink to="/my" activeClassName="active">MY</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;

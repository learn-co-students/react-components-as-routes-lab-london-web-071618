import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <NavLink to="/" exact>Home</NavLink>
         <NavLink
      to="/movies"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
    >Movies</NavLink>
    <NavLink to="/directors" exact>Directors</NavLink>
    <NavLink to="/actors" exact>Actors</NavLink>
    </div>
  );
};

export default NavBar;

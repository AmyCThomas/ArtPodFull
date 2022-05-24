import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar2 = () => (
  <div className="d-flex flex-row justify-content-between border-bottom">
    <NavLink to="/" activeclassname="active-link "><h1 className="arrow mx-5">{'<'}</h1></NavLink>
    <p className="col-6 mt-3">Enjoy Our Collection</p>
  </div>
);

export default NavBar2;

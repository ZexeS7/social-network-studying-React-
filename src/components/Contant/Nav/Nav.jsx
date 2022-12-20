import React from "react";
import {  NavLink } from "react-router-dom";
import nav from './Nav.module.css';

function Nav() {
  return (
    <nav className={nav.nav}>
       <ul className={nav.items}>
        <li className={nav.item}>
          <NavLink 
            className={({isActive}) => isActive ? nav.active : nav.link} 
            to="/">Home
          </NavLink>
        </li>
        <li className={nav.item}>
          <NavLink 
            className={({ isActive}) => isActive ? nav.active : nav.link} 
            to="/profile">Profile
          </NavLink>
        </li>
        <li className={nav.item}>
          <NavLink 
            className={({ isActive }) => isActive ? nav.active : nav.link} 
            to="/dialogs">Dialogs</NavLink>
        </li>
        <li className={nav.item}>
          <NavLink className={({ isActive }) => isActive ? nav.active : nav.link} to="/">Films</NavLink>
        </li>
        <li className={nav.item}>
          <NavLink className={({ isActive }) => isActive ? nav.active : nav.link} to="/">About</NavLink>
        </li>
        <li className={nav.item}>
          <NavLink className={({ isActive }) => isActive ? nav.active : nav.link} to="/">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
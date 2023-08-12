import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { BiHomeAlt, BiMap, BiNotepad } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

function Navigation() {

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
          >
            <span>
              <BiHomeAlt />
            </span>
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to={'/nearby'}
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
          >
            <span>
              <BiMap />
            </span>
            Nearby
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to={'/appoinment'}
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
          >
            <span>
              <BiNotepad />
            </span>
            Appoinment
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to={'/profile'}
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
          >
            <span>
              <CgProfile />
            </span>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import css from './Logo.module.css'
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

function Logo() {
  const token = useSelector(selectToken);
  return (
    <div>
      <NavLink to={token ? '/someprivatelink' : '/'}>
        <img className={css.logo} src={logo} alt="logo" />
        <span>
         Beauty Salon
        </span>
      </NavLink>
    </div>
  );
}

export default Logo;

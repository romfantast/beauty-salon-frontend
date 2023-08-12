import React from 'react';
import css from './Header.module.css';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';

function Header() {

  return (
    <section className={css.sectionHeader}>
      <header className={css.header}>
        <Logo />
        <Navigation />
      </header>
    </section>
  );
}

export default Header;

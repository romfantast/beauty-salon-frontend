import React from 'react';
import Navigation from 'components/Navigation/Navigation';

function Header() {
  return (
    <header className="border-t border-t-gray-400 fixed bottom-0 left-0 right-0">
      <Navigation />
    </header>
  );
}

export default Header;

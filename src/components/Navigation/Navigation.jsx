import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import navData from 'helpers/navData';
import setLineParams from 'helpers/setLineParams';

function Navigation() {
  const [leftPos, setLeftPos] = useState('');
  const [lineWidth, setLineWidth] = useState('');
  const navRef = useRef();
  const active = 'text-indigo-500';
  const def = 'text-indigo-950';

  useEffect(() => {
    const list = navRef.current;
    [...list.children].forEach(item => {
      const isActive = item.children[0].classList.contains(active);
      console.log(isActive);
      if (isActive) {
        setLineParams(item, setLineWidth, setLeftPos);
      }
    });
  }, []);

  const moveLine = ({ target }) => {
    const link = target.closest('li');
    setLineParams(link, setLineWidth, setLeftPos);
  };

  return (
    <nav className="relative">
      <div
        className={`absolute -top-px h-0.5 rounded-lg bg-indigo-500 ease-in-out duration-300`}
        style={{ left: leftPos, width: lineWidth }}
      ></div>
      <ul className="flex justify-between px-4" ref={navRef}>
        {navData.map(({ title, path, icon }) => (
          <li className="p-2" key={title}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? active : def)}
              onClick={moveLine}
            >
              <span className="hidden">{title}</span>
              <span>
                <IconContext.Provider value={{ className: 'text-2xl' }}>
                  {icon}
                </IconContext.Provider>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

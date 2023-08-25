import { Icon } from 'components/Icon/Icon';
import { TitleCategory } from 'components/Texts/TitleCategory';
import { services } from 'data/servicesData';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const BeautyServices = ({ styles }) => {
  return (
    <>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <TitleCategory text="Beauty services" />
          <NavLink
            href="/"
            className="flex items-center gap-x-1 text-indigo-500 font-bold text-sm"
          >
            see all
            <Icon id="arrow-right-v" width="16" height="16" />
          </NavLink>
        </div>
      </div>
      <ul
        className={
          'grid grid-cols-3 xs:grid-cols-2 gap-x-4 gap-y-6 justify-between ' +
          styles
        }
      >
        {services.map(service => (
          <li key={service.img} className="grid gap-y-2 place-content-center">
            <img
              src={require(`../../images/services/${service.img}.png`)}
              alt={service.text}
              className="rounded-full object-cover w-24 h-24"
            />
            <p className="text-xs leading-4 text-center">{service.text}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

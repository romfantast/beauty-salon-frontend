import { Icon } from 'components/Icon/Icon';
import { LazyImage } from 'components/LazyImage/LazyImage';
import { ServicesSkeleton } from 'components/Skeletons/ServicesSkeleton';
import { TitleCategory } from 'components/Texts/TitleCategory';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import servicesOperations from 'redux/services/services-operations';
import { selectServices } from 'redux/services/services-selectors';

export const BeautyServices = ({ styles }) => {
  const dispatch = useDispatch();
  const { services, isLoading } = useSelector(selectServices);
  const isCashedServices = services.length;

  useEffect(() => {
    if (!isCashedServices) {
      dispatch(servicesOperations.getAllServices());
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
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
      {isLoading ? (
        <ServicesSkeleton styles="mb-8" />
      ) : (
        <ul
          className={
            'grid grid-cols-3 xs:grid-cols-2 gap-x-4 gap-y-6 justify-between ' +
            styles
          }
        >
          {services.map(service => (
            <li
              key={service.image}
              className="grid gap-y-2 place-content-center"
            >
              <LazyImage
                src={service.image}
                alt={service.text}
                styles="rounded-full object-cover w-24 h-24"
              />
              <p className="text-xs leading-4 text-center">{service.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

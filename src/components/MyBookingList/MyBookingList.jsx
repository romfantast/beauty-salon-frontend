import { CircleDevider } from 'components/CircleDevider/CircleDevider';
import { Icon } from 'components/Icon/Icon';
import React from 'react';

export const MyBookingList = ({ id }) => {
  return (
    <div className="px-6">
      <h2 className="mb-8 text-center">need to show booking - {id}</h2>
      <ul>
        <li className="relative flex flex-col gap-y-1">
          <h3 className="text-m font-bold text-slate-950 leading-5">
            Woodlands Hills Salon
          </h3>
          <p className="text-sm text-slate-500">
            Keira throughway <CircleDevider /> 5.0 Kms
          </p>
          <p className="text-sm text-slate-500">Haircut x 1 + Shave x 1</p>
          <p className="text-sm text-slate-500">
            8 Mar 2021 <CircleDevider /> $102
          </p>
          <div className="flex justify-end mt-7">
            <button className="border border-solid border-indigo-500 rounded-lg text-xs text-center text-indigo-500 font-bold py-2 px-4">
              Reorder Booking
            </button>
          </div>
          <div className="absolute top-0 right-0 flex flex-col gap-y-1 items-center">
            <Icon id="favorite" width="24" height="24" stroke="6440fe" />
            <span className="text-indigo-500 font-bold">Favorite</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

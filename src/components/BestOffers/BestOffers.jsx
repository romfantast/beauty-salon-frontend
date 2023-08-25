import React from 'react';
import { TitleCategory } from 'components/Texts/TitleCategory';
import { bestOffersData } from 'data/bestOffersData';
import { Icon } from 'components/Icon/Icon';
import { CircleDevider } from 'components/CircleDevider/CircleDevider';
import { NavLink } from 'react-router-dom';

export const BestOffers = ({ styles }) => {
  return (
    <section className={`${styles}`}>
      <div className="flex items-center justify-between mb-4">
        <TitleCategory text="Best offers" />
        <NavLink
          href="/"
          className="flex items-center gap-x-1 text-indigo-500 font-bold text-sm"
        >
          see all
          <Icon id="arrow-right-v" width="16" height="16" />
        </NavLink>
      </div>
      <ul className="flex items-center gap-x-4 justify-start flex-nowrap overflow-x-scroll pb-5">
        {bestOffersData.map(offer => (
          <li key={offer.img} className="min-w-[290px] max-w-max">
            <div className="relative mb-1.5 ">
              <img
                className="h-52 object-cover rounded-xl"
                src={require(`../../images/bestOffers/${offer.img}.jpg`)}
                alt={offer.img}
              />
              <div className="absolute bottom-2 left-3 flex items-center gap-x-2.5 bg-slate-50 rounded-2xl px-3 py-1">
                <span>
                  <Icon
                    id="discount"
                    fill="unset"
                    stroke="unset"
                    width="20"
                    height="20"
                  />
                </span>
                <span className="text-indigo-500">{offer.discount}% Off</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <p className="uppercase text-slate-500 text-xs font-bold leading-normal">
                FOR {offer.gender}
              </p>
              <p className="text-lg text-slate-950 font-bold">{offer.salon}</p>
              <p className="flex items-center gap-x-2 text-sm text-slate-500">
                <span className="flex items-center gap-x-1">
                  <Icon id="star" stroke="" width="12" height="12" />
                  {offer.rating}
                </span>
                <CircleDevider />
                <span>{offer.away}Km</span>
                <CircleDevider />
                <span>{offer.price}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

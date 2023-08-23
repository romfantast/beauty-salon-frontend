import { Icon } from 'components/Icon/Icon';
import { services } from 'helpers/services';
import React from 'react';

export default function Home() {
  return (
    <section className="p-6">
      <div className="flex gap-2 items-center mb-4">
        <Icon id="location" width="14" height="14" />
        <span>Munich Center</span>
        <Icon id="arrow-down" width="16" height="16" />
      </div>
      <form className="relative shadow-2xl rounded-lg">
        <label>
          <input
            className="text-base p-2 w-full pl-8 text-slate-600 outline-slate-400 rounded-lg placeholder:text-slate-400"
            type="text"
            placeholder="Search service..."
          />
        </label>
        <button className="h-full absolute left-2">
          <Icon id="search-light" width="16" height="16" />
        </button>
      </form>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-950 leading-5">
            Beauty services
          </h2>
          <p className="text-indigo-500 font-bold text-sm">see all</p>
        </div>

        <ul className="flex justify-between flex-wrap gap-x-4 gap-y-6">
          {services.map(service => (
            <li
              key={service.img}
              className="flex flex-col gap-y-2 justify-center flex-grow items-center"
            >
              <img
                src={require(`../../images/services/${service.img}.png`)}
                alt={service.text}
                className="rounded-full object-cover w-20 h-20"
              />
              <p className="text-xs leading-4 w-3/4 text-center">
                {service.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

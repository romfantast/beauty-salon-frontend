import { Icon } from 'components/Icon/Icon';
import React from 'react';

export const SearchService = () => {
  return (
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
  );
};

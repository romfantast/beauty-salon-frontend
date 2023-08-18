import React from 'react';

export const TitleLarge = ({ styles, children }) => {
  return (
    <h2 className={`text-slate-950 text-3xl font-bold tracking-wide ${styles}`}>
      {children}
    </h2>
  );
};

import React from 'react';

export const Box = ({ styles, children }) => {
  return <section className={styles}>{children}</section>;
};

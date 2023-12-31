import React from 'react';

export const Icon = ({
  width,
  height,
  fill = 'currentColor',
  stroke = 'currentColor',
  id,
}) => {
  return (
    <svg width={width} height={height} fill={fill} stroke={stroke}>
      <use href={`sprite.svg#icon-${id}`}></use>
    </svg>
  );
};

import React from 'react';

import IMAGE_URL from '../assets/knux.png';

const IMAGE_HEIGHT = 239;

const Knuckle = ({ x, width, buffer, keyCode }) => {
  return (
    <div
      style={{
        width,
        height: IMAGE_HEIGHT,
        backgroundImage: `url(${IMAGE_URL})`,
        backgroundPosition: `${-x}px 0`,
      }}
    ></div>
  );
};

export default Knuckle;

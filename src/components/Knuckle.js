import React, { useEffect, useState } from 'react';

import IMAGE_URL from '../assets/knux.png';

const IMAGE_HEIGHT = 239;

const Knuckle = ({ x, width, buffer, keyCode }) => {
  const [isActive, setIsActive] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [fadeTimeout, setFadeTimeout] = useState(null);

  useEffect(() => {
    const callback = fn => event => {
      if (event.keyCode === keyCode) {
        fn();
      }
    };
    const onKeyDown = callback(() => {
      setIsFading(false);
      setIsActive(true);
      clearTimeout(fadeTimeout);
      setFadeTimeout(setTimeout(() => setIsFading(true), 0));
    });
    const onKeyUp = callback(() => setIsActive(false));
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [fadeTimeout, keyCode, x]);

  return (
    <div
      style={{
        width,
        height: IMAGE_HEIGHT,
        backgroundImage: `url(${IMAGE_URL})`,
        backgroundPosition: `${-x}px top`,
        position: 'relative',
      }}
    >
      <div
        style={{
          width,
          height: IMAGE_HEIGHT,
          backgroundImage: `url(${IMAGE_URL})`,
          backgroundPosition: `${-x}px bottom`,
          position: 'absolute',
          left: 0,
          top: 0,
          opacity: isActive ? 1 : 0,
          transition: isFading ? 'opacity 1s' : '',
        }}
      ></div>
    </div>
  );
};

export default Knuckle;

import React, { useEffect, useState } from 'react';
import load from 'audio-loader';
import play from 'audio-play';

import IMAGE_URL from '../assets/knux.png';

const IMAGE_HEIGHT = 239;

const Knuckle = ({ offset, width, url, active }) => {
  const [buffer, setBuffer] = useState(null);

  useEffect(() => {
    load(url).then(setBuffer);
  }, [url]);

  useEffect(() => {
    if (active && buffer) {
      play(buffer, {
        start: 0,
        autoplay: true,
      });
    }
  }, [active, buffer]);

  return (
    <div
      style={{
        width,
        height: IMAGE_HEIGHT,
        backgroundImage: `url(${IMAGE_URL})`,
        backgroundPosition: `${-offset}px bottom`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: IMAGE_HEIGHT,
          backgroundImage: `url(${IMAGE_URL})`,
          backgroundPosition: `${-offset}px top`,
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          opacity: active ? 0 : 1,
          transition: active ? '' : 'opacity 1s',
        }}
      ></div>
    </div>
  );
};

export default Knuckle;

import React, { useEffect, useState, useRef } from 'react';
import play from 'audio-play';

import Knuckle from './components/Knuckle.js';
import { knuckles, buffers, totalWidth } from './utils/config';

const SCALE_PERCENT = 0.9;

function App() {
  const [activeKeyCodes, setActiveKeyCodes] = useState({});
  const [scale, setScale] = useState(1);
  const [active, setActive] = useState(false);
  const appRef = useRef(null);

  useEffect(() => {
    const onKeyDown = ({ keyCode }) => {
      activeKeyCodes[keyCode] = true;
      setActiveKeyCodes({ ...activeKeyCodes });
      if (buffers[keyCode]) {
        play(buffers[keyCode], {
          start: 0,
          autoplay: true,
        });
      }
      setActive(true);
    };

    const onKeyUp = ({ keyCode }) => {
      delete activeKeyCodes[keyCode];
      setActiveKeyCodes({ ...activeKeyCodes });
      setActive(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onSizeChange = () =>
      setScale(SCALE_PERCENT * (appRef.current.offsetWidth / totalWidth));
    window.addEventListener('resize', onSizeChange);
    onSizeChange();
    return () => window.removeEventListener('resize', onSizeChange);
  }, []);

  return (
    <div
      className={`App ${active ? 'App-active' : 'App-inactive'}`}
      ref={appRef}
    >
      <div className="App-knuckles" style={{ transform: `scale(${scale})` }}>
        {knuckles.map(({ offset, width, keyCode, url }, index) => (
          <Knuckle
            active={activeKeyCodes[keyCode]}
            key={index}
            offset={offset}
            url={url}
            width={width}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

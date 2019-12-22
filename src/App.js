import React, { useEffect, useState } from 'react';
import Knuckle from './components/Knuckle.js';
import config from './utils/config';

function App() {
  const [activeKeyCodes, setActiveKeyCodes] = useState({});

  useEffect(() => {
    const onKeyDown = ({ keyCode }) => {
      activeKeyCodes[keyCode] = true;
      setActiveKeyCodes({ ...activeKeyCodes });
    };
    const onKeyUp = ({ keyCode }) => {
      delete activeKeyCodes[keyCode];
      setActiveKeyCodes({ ...activeKeyCodes });
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <div className="App-knuckles">
        {config.map(({ offset, width, keyCode, url }, index) => (
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

import React from 'react';
import Knuckle from './components/Knuckle.js';
import cs from './assets/cs.mp3';

const config = [
  { width: 78, keyCode: 37, buffer: cs },
  { width: 54, keyCode: 38, buffer: cs },
  { width: 71, keyCode: 40, buffer: cs },
  { width: 73, keyCode: 39, buffer: cs },
  { width: 77, keyCode: 32, buffer: cs },
  { width: 68, keyCode: 87, buffer: cs },
  { width: 51, keyCode: 83, buffer: cs },
  { width: 80, keyCode: 71, buffer: cs },
];

function App() {
  let x = 0;
  const knuckles = config.map(({ width, keyCode, url }, index) => {
    const component = (
      <Knuckle buffer={url} key={index} keyCode={keyCode} width={width} x={x} />
    );
    x += width;
    return component;
  });

  return (
    <div className="App">
      <div className="App-knuckles">{knuckles}</div>
    </div>
  );
}

export default App;

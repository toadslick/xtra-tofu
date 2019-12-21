import React from 'react';
import './App.css';
import Knuckle from './components/Knuckle.js';
import cs from './assets/cs.mp3';

const config = [
  { width: 78, keyCode: 0, buffer: cs },
  { width: 54, keyCode: 0, buffer: cs },
  { width: 71, keyCode: 0, buffer: cs },
  { width: 73, keyCode: 0, buffer: cs },
  { width: 77, keyCode: 0, buffer: cs },
  { width: 68, keyCode: 0, buffer: cs },
  { width: 51, keyCode: 0, buffer: cs },
  { width: 80, keyCode: 0, buffer: cs },
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

import load from 'audio-loader';

import kick from '../assets/kick.mp3';
import snare from '../assets/snare.mp3';
import tom1 from '../assets/tom1.mp3';
import tom2 from '../assets/tom2.mp3';
import reed from '../assets/reed.mp3';
import tambourine from '../assets/tambourine.mp3';
import hat1 from '../assets/hat1.mp3';
import hat2 from '../assets/hat2.mp3';

const knuckles = [
  { width: 78, keyCode: 37, url: kick },
  { width: 54, keyCode: 38, url: snare },
  { width: 71, keyCode: 40, url: tom1 },
  { width: 73, keyCode: 39, url: tom2 },
  { width: 77, keyCode: 32, url: reed },
  { width: 68, keyCode: 87, url: tambourine },
  { width: 51, keyCode: 83, url: hat1 },
  { width: 80, keyCode: 71, url: hat2 },
];

const buffers = {};

let offset = 0;
knuckles.forEach(obj => {
  obj.offset = offset;
  offset += obj.width;
  load(obj.url).then(buffer => {
    buffers[obj.keyCode] = buffer;
  });
});

export { knuckles, buffers, offset as totalWidth };

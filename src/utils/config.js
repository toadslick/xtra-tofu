import load from 'audio-loader';

import snare from '../assets/snare.mp3';
import kick from '../assets/kick.mp3';
import reed from '../assets/reed.mp3';
import hiHat from '../assets/hi-hat.mp3';
import chordAm from '../assets/chord-am.mp3';
import chordC from '../assets/chord-c.mp3';
import chordD from '../assets/chord-d.mp3';
import chordG from '../assets/chord-g.mp3';

const knuckles = [
  { width: 78, keyCode: 37, url: kick },
  { width: 54, keyCode: 38, url: snare },
  { width: 71, keyCode: 40, url: reed },
  { width: 73, keyCode: 39, url: hiHat },
  { width: 77, keyCode: 32, url: chordAm },
  { width: 68, keyCode: 71, url: chordC },
  { width: 51, keyCode: 83, url: chordD },
  { width: 80, keyCode: 87, url: chordG },
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

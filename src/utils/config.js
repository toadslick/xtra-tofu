import cs from '../assets/cs.mp3';

const config = [
  { width: 78, keyCode: 37, url: cs },
  { width: 54, keyCode: 38, url: cs },
  { width: 71, keyCode: 40, url: cs },
  { width: 73, keyCode: 39, url: cs },
  { width: 77, keyCode: 32, url: cs },
  { width: 68, keyCode: 87, url: cs },
  { width: 51, keyCode: 83, url: cs },
  { width: 80, keyCode: 71, url: cs },
];

let offset = 0;
config.forEach(obj => {
  obj.offset = offset;
  offset += obj.width;
});

export default config;

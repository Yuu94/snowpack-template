import confetti from 'canvas-confetti';
import {helloWorld} from './lib/hello-world';


const getE = (s: string) => document.querySelector(s);

helloWorld('World');

const canvasElement = getE('#canvas') as HTMLCanvasElement;
confetti.create(canvasElement, {
  resize: true,
  useWorker: true,
 })({ particleCount: 200, spread: 200 });
'use strict';
import './css/styles.css';
import { CountdownTimer } from './js/timer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: '1 Jan 2021',
});

timer.init();
